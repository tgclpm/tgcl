import fs from 'fs';
import path from 'path';

import nodemailer from 'nodemailer';

type mailSenderParams = {
    email: string;
    filename: string;
    url: string;
    subject: string;
    text: string;
};

const mailSender = async ({email, filename, url, subject, text}: mailSenderParams) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NEXT_PUBLIC_MAILER_EMAIL,
            pass: process.env.NEXT_PUBLIC_MAILER_PASSWORD,
        },
    });
    const templatePath = path.join(__dirname, '../../../../public/html-email.html');

    return transporter.sendMail({
        from: process.env.NEXT_PUBLIC_MAILER_EMAIL,
        to: email,
        bcc: process.env.NEXT_PUBLIC_MAILER_EMAIL,
        subject,
        text,
        html: fs.readFileSync(templatePath, 'utf-8'),
        attachments: [
            {
                filename: filename,
                path: url,
            },
        ],
    });
};

export default mailSender;
