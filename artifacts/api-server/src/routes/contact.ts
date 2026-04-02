import { Router } from "express";
import { sendContactEmail } from "../lib/email";

const router = Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    await sendContactEmail({
      to: "youssefwork39@gmail.com",
      subject: `Project Inquiry from ${name}`,
      name,
      email,
      message,
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
