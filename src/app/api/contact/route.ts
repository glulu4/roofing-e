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
                user: process.env.GMAIL_SENDER,
                pass: process.env.GMAIL_PASSWORD, // Use App Password here
            },
        });

        // Construct the email
const mailOptions = {
  from: `${fullName} <${email}>`,
  to: process.env.EMAIL_TO_SEND_TO,
  replyTo: email,
  subject: `Someone Contacted You - Paragon Exterior`,
  html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="
        font-family: 'Segoe UI', Arial, sans-serif;
        line-height: 1.6;
        color: #2d3748;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f7fafc;
      ">
        <div style="
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 30px;
          margin: 20px 0;
        ">
          <div style="
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #4299e1;
          ">
            <h1 style="
              color: #2b6cb0;
              margin: 0;
              font-size: 24px;
              font-weight: 600;
            ">New Contact Form Submission</h1>
          </div>

          <div style="margin-bottom: 25px;">
            <h2 style="
              color: #4a5568;
              font-size: 16px;
              font-weight: 600;
              margin: 0 0 8px 0;
              text-transform: uppercase;
              letter-spacing: 0.05em;
            ">Contact Details</h2>
            
            <div style="
              background-color: #edf2f7;
              border-radius: 6px;
              padding: 15px;
              margin-top: 10px;
            ">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #718096; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; font-weight: 500;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #718096;">Email:</td>
                  <td style="padding: 8px 0; font-weight: 500;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #718096;">Company:</td>
                  <td style="padding: 8px 0; font-weight: 500;">${company || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #718096;">Phone:</td>
                  <td style="padding: 8px 0; font-weight: 500;">${phoneNumber || 'N/A'}</td>
                </tr>
              </table>
            </div>
          </div>

          <div style="margin-top: 30px;">
            <h2 style="
              color: #4a5568;
              font-size: 16px;
              font-weight: 600;
              margin: 0 0 8px 0;
              text-transform: uppercase;
              letter-spacing: 0.05em;
            ">Message</h2>
            <div style="
              background-color: #edf2f7;
              border-radius: 6px;
              padding: 15px;
              margin-top: 10px;
              white-space: pre-wrap;
              font-size: 15px;
              line-height: 1.6;
            ">${message}</div>
          </div>

          <div style="
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            text-align: center;
            font-size: 14px;
            color: #718096;
          ">
            This email was sent from the Paragon Exterior contact form.
          </div>
        </div>
      </body>
    </html>
  `
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
