// backend/models/question.js
import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  company: String,
  round: String,
  category: String,
  question: String,
  answer: String,
  explanation: String
});

export default mongoose.model("Question", questionSchema);
