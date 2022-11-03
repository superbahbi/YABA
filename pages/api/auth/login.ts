import { NextApiRequest, NextApiResponse } from "next";
import { sign } from "jsonwebtoken";
import { validationResult } from 'express-validator';
import { PrismaClient } from '@prisma/client'
import argon2 from "argon2"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { email, password } = req.body;
    // verify user input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

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

    // TODO Check if password is correct
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