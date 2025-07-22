import {EstimateFormData} from '@/app/estimate/page';
import {NextResponse, NextRequest} from 'next/server';
const nodemailer = require('nodemailer');


export async function POST(request: NextRequest) {
  try {
    // Parse the form data
    const body = await request.json();
    const email = body.email;


    const sheetDb = process.env.SHEET_DB_ENDPOINT || "";

    // Save email to SheetDB
    fetch(sheetDb, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: [
          {
            'Email': email,
            'Date': new Date().toLocaleDateString(),
          }
        ]
      })
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    const infoEmail = process.env.INFO_AT_PARAGON_EMAIL


    if (!email) {
      return NextResponse.json(
        {error: 'Invalid input: Ensure all required fields are filled.'},
        {status: 400}
      );
    }


    // Configure Nodemailer
    const smtpTransport = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: infoEmail,
        pass: process.env.INFO_AT_PARAGON_PASSWORD, // Use App Password here
      },
    });

    // Construct the email
    const mailOptions = {
      from: `Paragon Exterior <${infoEmail}>`,
      to: email,
      replyTo: infoEmail,
      subject: `Your Gift - Paragon Exterior`,
      html: `
<!-- <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Your 15% Discount</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    @media (prefers-color-scheme: dark) {
      body {
        background-color: #111111 !important;
        color: #ffffff !important;
      }
      .container {
        background-color: #1a1a1a !important;
        color: #ffffff !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center">
        <table width="100%" style="max-width: 600px;" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding: 0;">
              <img src="https://www.paragonexterior.com/images/house1.jpeg" alt="Roofing Banner" width="600" style="display: block; width: 100%; max-width: 600px; height: auto;">
            </td>
          </tr>

          <tr>
            <td class="container" style="padding: 40px 30px; background-color: #ffffff; text-align: center;">
              <img src="https://www.paragonexterior.com/images/header.png" alt="Paragon Exterior" width="120" style="margin-bottom: 30px;">

              <h1 style="font-size: 24px; margin: 0 0 15px 0; color: #004080;">🎉 Here’s 15% Off!</h1>
              <p style="font-size: 16px; margin: 0 0 10px 0; line-height: 1.5; color: #444444;">
                Thanks for visiting <strong>Paragon Exterior</strong>. This email serves as your digital receipt.
              </p>
              <p style="font-size: 16px; margin: 20px 0 0 0; color: #666;">
                Just mention this email during your free inspection to redeem your <strong>15% discount</strong> on roofing or siding services.
              </p>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding: 20px 10px; font-size: 12px; color: #888888;">
              Need help? <a href="mailto:info@paragonexterior.com" style="color: #888;">info@paragonexterior.com</a>
              | (215) 799-7663
              <br>
              1 Neshaminy Interplex Dr #103, Feasterville-Trevose, PA 19053
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html> -->



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Your 15% Discount</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    @media (prefers-color-scheme: dark) {
      /* body {
        background-color: #111 !important;
        color: #fff !important;
      } */
      /* .card {
        background-color: #1a1a1a !important;
        color: #fff !important;
        border-color: #2a2a2a !important;
      } */
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" >
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table class="card" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background: #fff; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);">
          <!-- Image Banner -->
          <tr>
            <td>
              <img src="https://www.paragonexterior.com/images/house1.jpeg" alt="Roofing Banner" width="600" style="display: block; width: 100%; max-width: 600px; height: 300px; object-fit: cover; border-top-left-radius: 12px; border-top-right-radius: 12px;" />
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td align="center" style="padding: 40px 30px;">
              <!-- Logo -->
              <img src="https://www.paragonexterior.com/images/header.png" alt="Paragon Exterior" width="180" style="margin-bottom: 30px;" />

              <h1 style="font-size: 24px; margin: 0 0 16px 0; color: #004080;">🎉 Here’s 15% Off!</h1>

              <p style="font-size: 16px; line-height: 1.6; margin: 0 0 10px 0; color: #444;">
                Thanks for visiting <strong>Paragon Exterior</strong>. This email is your digital receipt.
              </p>

              <p style="font-size: 16px; line-height: 1.6; margin: 20px 0 0 0; color: #666;">
                Just mention this email during your free inspection to redeem your <strong>15% discount</strong> on any roofing or siding project.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding: 20px 30px; font-size: 12px; color: #999; background: #fafafa; border-top: 1px solid #eee;">
              Need help? <a href="mailto:info@paragonexterior.com" style="color: #888; text-decoration: none;">info@paragonexterior.com</a>
              | (215) 799-7663
              <br />
              1 Neshaminy Interplex Dr #103, Feasterville-Trevose, PA 19053
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
    };

    // Send the email
    const info = await smtpTransport.sendMail(mailOptions);
    // console.log(`Email sent: ${info.messageId}`);

    return NextResponse.json({message: 'Success. Email was sent'});
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {error: 'Could not send message. Please try again later.'},
      {status: 500}
    );
  }
}
