const nodemailer = require("nodemailer");
exports.postMail = (req, res) => {
  const { subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Use your email service provider here or provide SMTP settings
    auth: {
      user: process.env.EMAIL, // Replace with your email address
      pass: process.env.PASSWORD, // Replace with your email password or app-specific password
    },
  });
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.YOUR_EMAIL,
    subject,
    text: message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    } else {
      console.log("Email sent:", info.response);
      res.json({ message: "Email sent successfully" });
    }
  });
};
