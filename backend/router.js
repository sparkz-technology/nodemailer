// set router for app.js
// router.js
const express = require("express");
const router = express.Router();
const controller = require("./controller");
require("dotenv").config();
router.post("/send-email", controller.postMail);
module.exports = router;
