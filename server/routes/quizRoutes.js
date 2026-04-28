import express from 'express';
import { handleQuizSubmission } from '../controllers/quizController.js';

const router = express.Router();

// POST /api/quiz
router.post('/', handleQuizSubmission);

export default router;
