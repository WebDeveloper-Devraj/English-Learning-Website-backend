require("dotenv").config();

const express = require("express");
const router = express.Router();
const { userVerification } = require("../middlewares/AuthMiddleware");
const { sendMail } = require("../controllers/contactController");

router.post("/", userVerification, sendMail);

module.exports = router;
