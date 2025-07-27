export const getEmailTemplate = ({ name, email, phone, message }) => {
  const textContent = `
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

  return { textContent, htmlContent };
};