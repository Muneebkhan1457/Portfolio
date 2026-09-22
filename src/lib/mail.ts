import nodemailer from "nodemailer";
import type { ContactPayload } from "./validation";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(data: ContactPayload) {
  await transporter.sendMail({
    from: `"${data.name}" <${process.env.SMTP_USER}>`,
    replyTo: data.email,
    to: process.env.CONTACT_TO_EMAIL,
    subject: `New inquiry from ${data.name}${data.service ? ` — ${data.service}` : ""}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.company ? `Company: ${data.company}` : null,
      data.service ? `Service: ${data.service}` : null,
      "",
      data.message,
    ].filter(Boolean).join("\n"),
  });
}
