import { NextApiRequest, NextApiResponse } from "next";
import { sign } from "jsonwebtoken";
import { PrismaClient } from '@prisma/client'
import z from "zod"
import argon2 from "argon2"

const prisma = new PrismaClient()

interface loginType {
    email: string;
    password: string;
}
const schema = z.object({
    email: z.string().email("Email Address is invalid"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),
});
/**
  * @route   POST /api/auth/login
  * @desc    Login user and return JWT token and user data (id, email, firstName, lastName)
  * @access  Public
  * @params  email, password
  * @return  user, token
  * @errors  400, 500
*/
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Validate user input data
    const validationResult = schema.safeParse(req.body);

    // verify user input data
    if (!validationResult.success) {
        return res.status(400).json({ errors: validationResult.error });
    }

    // Get user input data
    const { email, password }: loginType = req.body;
    // Check if user exists in database
    const user = await prisma.user.findUnique({
        where: {
            email: email.toLowerCase(),
        }
    })

    // Check if user exist
    if (!user) {
        return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    // Check if password is correct
    const valid = await argon2.verify(user.password, password);
    if (!valid) {
        return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    // Sanitize user data with password before sending it to client
    const sanitizedUser = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
    }
    // TODO Check if user is verified
    // Sign Access and Refresh Tokens
    // TODO change expriation time to an env variable
    const accessToken = sign(sanitizedUser, process.env.JWT_ACCESS_TOKEN_SECRET_KEY as string, { expiresIn: process.env.JWT_TOKEN_EXPIRATION });
    const refreshToken = sign(sanitizedUser, process.env.JWT_REFRESH_TOKEN_SECRET_KEY as string, { expiresIn: process.env.JWT_TOKEN_EXPIRATION });
    // Add Cookies to response
    // res.cookie('access_token', accessToken, tokenCookieOptions);
    // res.cookie('refresh_token', refreshToken, tokenCookieOptions);
    // res.cookie('logged_in', true, {
    //     ...tokenCookieOptions,
    //     httpOnly: false,
    // });
    // Send response
    return res.status(200).json({
        user: sanitizedUser,
        accessToken,
        refreshToken
    });
}