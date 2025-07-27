import { sendContactEmail } from '../services/emailService.js';

export const submitContactForm = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    await sendContactEmail({ name, email, phone, message });
    console.log(`Contact form submitted by: ${name} (${email})`);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ message: 'Email failed to send' });
  }
};