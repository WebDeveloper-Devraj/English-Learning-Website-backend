const mongoose = require("mongoose");
const Quiz = require("./models/Quiz"); // path to your Quiz model
const quizzes = require("./quizData");

mongoose
  .connect(
    "mongodb+srv://devrajpujari292_db_user:REpq94a7oh1pbY4b@englishlearningcluster.yp4yisf.mongodb.net/english_learning?retryWrites=true&w=majority&appName=EnglishLearningCluster",
    {}
  )
  .then(async () => {
    console.log("Connected to DB");

    // delete existing quizzes
    await Quiz.deleteMany({});
    console.log("existing quizzes deleted");

    // Insert data
    await Quiz.insertMany(quizzes);
    console.log("Quizzes inserted successfully!");

    mongoose.disconnect();
  })
  .catch((err) => console.log(err));
