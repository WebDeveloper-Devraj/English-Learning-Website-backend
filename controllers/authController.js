const User = require("../models/User");
const { createSecretToken } = require("../utils/SecretToken");

const bcrypt = require("bcryptjs");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");

module.exports.login = wrapAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ExpressError(400, "All fields are required");
  }

  const user = await User.findOne({ email }).populate("quizResults.quizId");
  if (!user) {
    throw new ExpressError(400, "Incorrect email! please enter correct email.");
  }

  const auth = await bcrypt.compare(password, user.password);
  if (!auth) {
    throw new ExpressError(
      400,
      "Incorrect password! please enter correct password."
    );
  }

  const token = createSecretToken(user._id);
  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // ✅ required for HTTPS (Render)
    sameSite: "Lax", // ✅ allow cross-origin on Render
    maxAge: 3 * 24 * 60 * 60 * 1000, // 3 day
  });

  res.status(201).json({
    message: "Welcome to English Learning!",
    success: true,
    user: user,
  });
});

// jwt configuration
module.exports.signup = wrapAsync(async (req, res, next) => {
  const { username, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ExpressError(400, "User already exists");
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  const token = createSecretToken(user._id);
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "Lax",
    maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
  });

  res
    .status(201)
    .json({ message: "Welcome to English Learning!", success: true, user });
});

module.exports.logout = wrapAsync((req, res, next) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "Lax",
    secure: false,
  });

  res.status(200).json({ message: "Logged out successfully", success: true });
});
