// backend/routes/questionRoutes.js
import express from "express";
import Question from "../models/question.js";

const router = express.Router();

router.get("/:company", async (req, res) => {
  const { company } = req.params;
  try {
    const questions = await Question.find({ company });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
