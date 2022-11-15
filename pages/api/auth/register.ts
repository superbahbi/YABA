import { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from '@prisma/client'
import z from "zod"
import argon2 from "argon2"

const prisma = new PrismaClient()

interface registerType {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}
const schema = z.object({
    email: z.string().email(),
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
    firstName: z.string().min(2),
    lastName: z.string().min(2),
});
/**
* @route   POST /api/auth/register
* @desc    Register user and send verification email to user email address 
* @access  Public
* @params  email, password, firstName, lastName
* @return  void
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
    const { email, password, firstName, lastName }: registerType = req.body;
    // hashing password
    const hashedPassword = await argon2.hash(password)
    try {
        // Check if user exists in database
        const user: Prisma.UserCreateInput = await prisma.user.create({
            data: {
                email,
                firstName,
                lastName,
                password: hashedPassword,
            },
        })
        const sanitizedUser = {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
        }
        return res.status(200).json({ data: { sanitizedUser } });
    }
    catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError)
            if (error.code === 'P2002') {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            }
        return res.status(500).json({ errors: [{ msg: 'Server error' }] });
    }
}