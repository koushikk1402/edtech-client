const mongoose = require("mongoose");
const QuizSchema = new mongoose.Schema({ title: String, questions: Array });
module.exports = mongoose.model("Quiz", QuizSchema);