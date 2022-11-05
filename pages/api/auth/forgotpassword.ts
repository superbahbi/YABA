import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
import z from "zod"
import { v4 as uuidv4 } from 'uuid';
import { sendEmail } from '@/utils/sendEmail';

const prisma = new PrismaClient()

interface forgotPasswordType {
    email: string;
    password: string;
}
const schema = z.object({
    email: z.string().email(),
});
/** 
* @route   POST /api/auth/forgot-password
* @desc    Send reset password link to user email
* @access  Public
* @params  email
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

    const { email }: forgotPasswordType = req.body;

    // Check if user exists in database
    const user = await prisma.user.findUnique({
        where: {
            email: email.toLowerCase(),
        }
    })

    // Check if user exist
    if (!user) {
        console.log("test")
        return res.status(400).json({ status: "error" });
    }

    // TODO send email with reset link
    const token = uuidv4();
    await prisma.resetPasswordToken.create({
        data: {
            token,
            userId: user.id,
        }
    })

    const r = await sendEmail(user.email,
        `<a href="http://localhost:3000/auth/resetpassword/${token}">reset password</a>`
    )
    console.log(r)
    return res.status(200).json({ status: "success" });
}