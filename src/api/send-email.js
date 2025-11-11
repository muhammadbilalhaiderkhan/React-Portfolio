// /api/send-email.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Only POST requests allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ status: "error", message: "Please fill in all fields." });
  }

  try {
    // Nodemailer transporter (SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,       // example: "smtp.gmail.com"
      port: process.env.SMTP_PORT || 587,
      secure: false,                     // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,     // your email
        pass: process.env.SMTP_PASS,     // email app password
      },
    });

    // Mail options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.TO_EMAIL,           // your email
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ status: "success", message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Failed to send message." });
  }
}
