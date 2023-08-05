const nodemailer = require("nodemailer");
exports.sendMail = (subject, message, callback) => {
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
  transporter.sendMail(mailOptions, callback);
};
