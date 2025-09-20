require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const ExpressError = require("./utils/ExpressError");
const app = express();

// Parse JSON request bodies
app.use(express.json());

// serving public folder (ex. for serving images)
app.use(express.static("public"));

// Enable CORS so that your frontend can make requests
app.use(
  cors({
    origin: ["http://localhost:5173"], // Allow only frontend origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow cookies and authentication headers
  })
);

app.use(cookieParser());

const mongoURL = process.env.MONGO_URL;

mongoose
  .connect(mongoURL)
  .then(() => console.log("DB connection successFull."))
  .catch((err) => console.log("Error connecting to MongoDB", err));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/quiz", require("./routes/quizRoutes"));

app.use("*", (req, res, next) => {
  throw new ExpressError(404, "API route Not Found!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong!" } = err;

  // Mongoose validation errors should have status code = 400
  if (err.name === "ValidationError") {
    status = 400;
  }
  console.log("error middleware: ", err.message);

  // Other errors
  res.status(status).send({ success: false, message });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
