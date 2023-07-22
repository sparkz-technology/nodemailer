// app.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const YOUR_EMAIL = "sutharsansparkz@gmail.com"; // Replace this with your email address

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/send-email", (req, res) => {
  const { subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail", // Use your email service provider here or provide SMTP settings
    auth: {
      user: "sparkzvercel@gmail.com", // Replace with your email address
      pass: "ycrjahmbmtiqamez", // Replace with your email password or app-specific password
    },
  });

  const mailOptions = {
    from: "sparkzvercel@gmail.com",
    to: YOUR_EMAIL,
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
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});