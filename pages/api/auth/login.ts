import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from '@prisma/client'
import z from "zod"
import argon2 from "argon2"
import { buildTokens, setTokens } from '@/utils/cookies'

const prisma = new PrismaClient()

interface loginType {
    email: string;
    password: string;
}
const formSchema = z.object({
    email: z.string().email("Email Address is invalid"),
    password: z
        .string()
        .min(8, "Password must contain atleast 8 characters long")
        .max(32, "Password must be at max 32 characters long")
    // .regex(
    //     /^(?=.*[A-Z])/,
    //     "Password must contain atleast one uppercase character"
    // )
    // .regex(
    //     /^(?=.*[a-z])/,
    //     "Password must contain atleast one lowercase character(s)"
    // )
    // .regex(/^(?=.*[0-9])/, "Password must contain atleast one number")
    // .regex(
    //     /^(?=.*[!@#$%^&*])/,
    //     "Password must contain atleast one special character(s)"
    // ),

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
    const validationResult = formSchema.safeParse(req.body);
    console.log(validationResult);
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
        tokenVersion: user.tokenVersion
    }
    // Sign Access and Refresh Tokens
    const { accessToken, refreshToken } = await buildTokens(sanitizedUser)
    setTokens(res, accessToken, refreshToken)

    // Send response
    return res.status(200).json({
        accessToken,
        refreshToken,
        id: user.id,
    });
}