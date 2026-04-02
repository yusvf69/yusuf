import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export interface SendEmailParams {
  to: string;
  subject: string;
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail({
  to,
  subject,
  name,
  email,
  message,
}: SendEmailParams) {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Message:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${message.replace(/\n/g, "<br>")}</td>
        </tr>
      </table>
    </div>
  `;

  return transporter.sendMail({
    from: process.env.GMAIL_USER,
    to,
    subject,
    html: htmlContent,
  });
}
