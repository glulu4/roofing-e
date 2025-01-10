import {ContactFormData} from '@/app/contact/page';
import { NextResponse, NextRequest } from 'next/server';
const nodemailer = require('nodemailer');


export async function POST(request: NextRequest) {
    try {
        console.log("Processing request...");

        // Parse the form data
        const body = await request.json();
        const formData:ContactFormData = body.formData;
        // const formData = await request.formData();

        // console.log(formData);
        
        const firstName = formData.firstName;
        const lastName = formData.lastName;
        const company = formData.company;
        const phoneNumber = formData.phoneNumber;
        const email = formData.email;
        const message = formData.message;

        if (!email || !message || !firstName || !lastName) {
            return NextResponse.json(
                { error: 'Invalid input: Ensure all required fields are filled.' },
                { status: 400 }
            );
        }

        const fullName = `${firstName} ${lastName}`;

        // Configure Nodemailer
        const smtpTransport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.GMAIL_TEST_EMAIL,
                pass: process.env.GMAIL_TEST_PASSWORD, // Use App Password here
            },
        });

        // Construct the email
        const mailOptions = {
            from: `${fullName} <${process.env.GMAIL_TEST_EMAIL}>`,
            to: process.env.GMAIL_TEST_EMAIL,
            replyTo: email,
            subject: `Website Activity from ${email}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 5px;">Contact Form Submission</h2>
                    <section style="margin-top: 20px;">
                        <h3 style="color: #333; margin: 10px 0;">Name</h3>
                        <p>${fullName}</p>
                    </section>
                    <section style="margin-top: 20px;">
                        <h3 style="color: #333; margin: 10px 0;">Email</h3>
                        <p>${email}</p>
                    </section>
                    <section style="margin-top: 20px;">
                        <h3 style="color: #333; margin: 10px 0;">Company</h3>
                        <p>${company || 'N/A'}</p>
                    </section>
                    <section style="margin-top: 20px;">
                        <h3 style="color: #333; margin: 10px 0;">Phone Number</h3>
                        <p>${phoneNumber || 'N/A'}</p>
                    </section>
                    <section style="margin-top: 20px;">
                        <h3 style="color: #333; margin: 10px 0;">Message</h3>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </section>
                </div>
            `,

        };

        // Send the email
        const info = await smtpTransport.sendMail(mailOptions);
        // console.log(`Email sent: ${info.messageId}`);

        return NextResponse.json({ message: 'Success. Email was sent' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Could not send message. Please try again later.' },
            { status: 500 }
        );
    }
}
