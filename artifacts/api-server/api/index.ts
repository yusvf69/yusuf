import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export default async function handler(req: any, res: any) {
  if (req.method === "POST" && req.url === "/api/contact") {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        res.status(400).json({ error: "Missing required fields" });
        return;
      }

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

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: "youssefwork39@gmail.com",
        subject: `Project Inquiry from ${name}`,
        html: htmlContent,
      });

      res.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Email error:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else if (req.method === "GET" && req.url === "/api/healthz") {
    res.json({ status: "ok" });
  } else {
    res.status(404).json({ error: "Not found" });
  }
}
