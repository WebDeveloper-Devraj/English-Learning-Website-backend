const express = require("express");
const { login, signup, logout } = require("../controllers/authController");
const router = express.Router();

// login user
router.post("/login", login);

// signup user
router.post("/signup", signup);

// logout user
router.get("/logout", logout);

module.exports = router;
