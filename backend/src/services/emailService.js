import nodemailer from 'nodemailer';
import { getEmailTemplate } from '../utils/emailTemplates.js';

export const sendContactEmail = async ({ name, email, phone, message }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { textContent, htmlContent } = getEmailTemplate({ name, email, phone, message });

  await transporter.sendMail({
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Contact Form - ${name}`,
    text: textContent,
    html: htmlContent,
  });
};