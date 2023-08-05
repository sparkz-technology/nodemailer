const { sendMail } = require("./service");
exports.postMail = (req, res) => {
  const { subject, message } = req.body;
  sendMail(subject, message, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    } else {
      console.log("Email sent:", info.response);
      res.json({ message: "Email sent successfully" });
    }
  });
};
