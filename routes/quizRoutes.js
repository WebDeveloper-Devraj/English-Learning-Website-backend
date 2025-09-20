const express = require("express");
const {
  submit,
  getAllQuizzes,
  getQuizById,
} = require("../controllers/quizController");
const router = express.Router();

router.get("/", getAllQuizzes);

router.get("/:id", getQuizById);

router.post("/submit", submit);

module.exports = router;
