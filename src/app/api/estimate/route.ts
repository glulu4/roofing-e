import {ContactFormData} from '@/app/contact/page';
import {EstimateFormData} from '@/app/estimate/page';
import { NextResponse, NextRequest } from 'next/server';
const nodemailer = require('nodemailer');


export async function POST(request: NextRequest) {
    try {
        console.log("Processing request...");

        // Parse the form data
        const body = await request.json();
        const { firstName, lastName, email, phoneNumber, address, city, state, zip, message } = body.formData as EstimateFormData;


        const fullLocation:string = address + ", " + city + ", "+ state + ", " + zip
        if (!email || !message || !firstName || !lastName || !address || !city || !state || !zip) {
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
            subject: `Someone Sent you an Estimate on paragonexterior`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h1 style="color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 10px;">Estimate Request</h1>
                    <section style="margin-top: 20px;">
                        <h3 style="color: #333; margin: 10px 0;">Name</h3>
                        <p>${fullName}</p>
                    </section>
                    <section style="margin-top: 20px;">
                        <h3 style="color: #333; margin: 10px 0;">Email</h3>
                        <p>${email}</p>
                    </section>
                    <section style="margin-top: 20px;">
                        <h3 style="color: #333; margin: 10px 0;">Location</h3>
                        <p>${fullLocation || 'N/A'}</p>
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
