const mongoose = require("mongoose");
const Quiz = require("./models/Quiz"); // path to your Quiz model
const quizzes = require("./quizData");

mongoose
  .connect("mongodb://127.0.0.1:27017/english_learning", {})
  .then(async () => {
    console.log("Connected to DB");

    // Insert data
    await Quiz.insertMany(quizzes);
    console.log("Quizzes inserted successfully!");

    mongoose.disconnect();
  })
  .catch((err) => console.log(err));
