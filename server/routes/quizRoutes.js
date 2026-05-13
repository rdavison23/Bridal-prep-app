import express from 'express';
import { handleQuizSubmission } from '../controllers/quizController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Quiz route OK' });
});

// POST /api/quiz
router.post('/', handleQuizSubmission);

export default router;
