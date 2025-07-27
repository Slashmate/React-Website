// server.js (ES module version)
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: 'Name, email, and message are required fields' 
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Create a more detailed email template
    // Create a more detailed email template

    const emailContent = `
      Contact Form Submission

      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Message: ${message}

      ---
      This email was sent from your website contact form.
    `.trim();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Contact Form Submission</h2>
        
        <div style="margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone ? `<a href="tel:${phone}">${phone}</a>` : 'Not provided'}</p>
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #555;">Message:</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
        <p style="color: #666; font-size: 12px;">This email was sent from your website contact form.</p>
      </div>
    `;
  
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Better from format
      to: process.env.EMAIL_USER,
      replyTo: email, // Allow direct reply to the sender
      subject: `Contact Form - ${name}`,
      text: emailContent,
      html: htmlContent,
    });

    console.log(`Contact form submitted by: ${name} (${email})`);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Email sending error:', err);
    res.status(500).json({ message: 'Email failed to send' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

// // Handle 404 for unknown routes
// app.use('*', (req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
