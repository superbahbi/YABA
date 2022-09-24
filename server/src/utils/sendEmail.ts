import nodemailer from "nodemailer";

/**
 * @desc    Send email to user with a link to reset password
 * @access  Private
 * @params  to - email address of the receiver
 * @params  html - html body of the email
 * @return  void
 * @throws  Error - if email is not sent
 * @example
 * sendEmail(
 * test@yaba.com,
 * "<h1>Reset Password</h1>
 * <p>Please click the link below to reset your password</p>
 * <a href="http://host:port/reset-password?token=1234567890">Reset Password</a>
 * ")
 * @see https://www.npmjs.com/package/nodemailer
*/
export async function sendEmail(to: string, html: string) {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER, // generated ethereal user
            pass: process.env.EMAIL_PASS, // generated ethereal password
        },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Yaba daba doo 👻" <yaba@yaba.com>', // sender address
        to, // list of receivers
        subject: "Change password", // Subject line
        html, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}