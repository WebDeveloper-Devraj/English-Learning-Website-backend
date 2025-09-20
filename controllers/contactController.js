const User = require("../models/User");
const ContactMessage = require("../models/ContactMessage");
const transporter = require("../utils/sendEmail"); // import transporter
const wrapAsync = require("../utils/wrapAsync");

module.exports.sendMail = wrapAsync(async (req, res) => {
  const { name, message, subject } = req.body;

  // Save to DB (optional)
  const newMessage = new ContactMessage({
    userId: req.user._id,
    name,
    subject,
    message,
  });
  await newMessage.save();

  const user = await User.findById(req.user._id);

  // Send email to owner
  await transporter.sendMail({
    from: `"Contact Form" <${user.email}>`,
    to: process.env.OWNER_EMAIL, // restaurant owner's email
    subject: "New Message from English Learning Website Contact Form",
    html: `
        <h3>New Message Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
  });

  res.status(201).json({ success: true, message: "Message sent successfully" });
});
