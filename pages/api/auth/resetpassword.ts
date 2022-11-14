import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
import z from "zod"
import argon2 from "argon2"

const prisma = new PrismaClient()

interface resetPasswordType {
    token: string;
    password: string;
}
const schema = z.object({
    token: z.string(),
    password: z
        .string()
        .min(8, "Password must contain atleast 8 characters long")
        .max(32, "Password must be at max 32 characters long")
        .regex(
            /^(?=.*[A-Z])/,
            "Password must contain atleast one uppercase character"
        )
        .regex(
            /^(?=.*[a-z])/,
            "Password must contain atleast one lowercase character(s)"
        )
        .regex(/^(?=.*[0-9])/, "Password must contain atleast one number")
        .regex(
            /^(?=.*[!@#$%^&*])/,
            "Password must contain atleast one special character(s)"
        ),
});
/**
* @route    POST /api/auth/reset-password
* @desc     Reset password with token sent to email address 
* @access   public
* @params   token, password
* @return   void
* @errors   400, 500 
*/
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Validate user input data
    const validationResult = schema.safeParse(req.body);

    // verify user input data
    if (!validationResult.success) {
        return res.status(400).json({ errors: validationResult.error });
    }

    const { token, password }: resetPasswordType = req.body;

    // Check if user exists in database
    const resetPasswordToken = await prisma.resetPasswordToken.findUnique({
        where: {
            token,
        }
    })
    // Check if user exist
    if (!resetPasswordToken) {
        return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    // hashing password
    const hashedPassword = await argon2.hash(password)
    try {
        // Check if user exists in database
        await prisma.user.update({
            where: {
                id: resetPasswordToken.userId,
            },
            data: {
                password: hashedPassword,
            },
        })
        return res.status(200).json({ status: "success" });
    }
    catch (error) {
        return res.status(400).json({ errors: [{ msg: 'Database connection problem' }] });
    }
}