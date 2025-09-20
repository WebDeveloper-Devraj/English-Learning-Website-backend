const User = require("../models/User");
const Quiz = require("../models/Quiz");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");

module.exports.submit = wrapAsync(async (req, res) => {
  const {
    userId,
    level,
    quizId,
    selectedAnswers,
    score,
    totalQuestions,
    pointsEarned,
    completedAt,
  } = req.body;

  const selectedAnswersArray = Object.entries(selectedAnswers).map(
    ([questionId, selectedOption]) => ({
      questionId,
      selectedOption,
    })
  );

  if (!level || !quizId) {
    throw new ExpressError("Level and Quiz ID are required", 400);
  }

  // 🔐 user is already authenticated (req.user set by auth middleware)
  const user = await User.findById(userId);

  if (!user) {
    throw new ExpressError("User not found", 404);
  }

  const quizResult = {
    level,
    quizId,
    selectedAnswers: selectedAnswersArray,
    score,
    totalQuestions,
    pointsEarned,
    completedAt: completedAt || new Date(),
  };

  user.quizResults.push(quizResult);

  await user.save();

  res.status(200).json({
    success: true,
    message: "Quiz submitted successfully",
    quizResult,
    user,
  });
});

module.exports.getAllQuizzes = wrapAsync(async (req, res) => {
  const quizzes = await Quiz.find({});
  res.json({ success: true, quizzes });
});

// GET quiz by ID
module.exports.getQuizById = wrapAsync(async (req, res) => {
  const { id } = req.params;

  const quiz = await Quiz.findById(id);

  if (!quiz) {
    throw new ExpressError("Quiz not found", 404);
  }

  res.status(200).json({ success: true, quiz });
});
