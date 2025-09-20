const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizResultSchema = new Schema({
  level: { type: String, required: true },
  quizId: { type: Schema.Types.ObjectId, ref: "Quiz", required: true },
  selectedAnswers: [
    {
      questionId: { type: Schema.Types.ObjectId, required: true },
      selectedOption: { type: Number, required: true },
    },
  ],
  score: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  pointsEarned: { type: Number, required: true },
  completedAt: { type: Date, default: Date.now },
});

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Your email address is required!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter password!"],
  },
  quizResults: [quizResultSchema], // ✅ store all quiz results

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // 🔒 only hash if modified
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = new mongoose.model("User", userSchema);
