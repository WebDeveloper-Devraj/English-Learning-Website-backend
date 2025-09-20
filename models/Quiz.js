const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
  question: String,
  type: String,
  text: String,
  options: [String],
  correctAnswer: {
    type: Schema.Types.Mixed, // can be string or number
    required: true,
  },
  explanation: String,
});

const quizSchema = new Schema({
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: true,
  },
  questions: [questionSchema],
});

module.exports = mongoose.model("Quiz", quizSchema);
