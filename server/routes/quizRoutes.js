import exppress from 'express';
import { handleQuizSubmission } from '..controller/quizController.js';

const router = exppress.Router();

//Post /api/quiz

router.post('/', handleQuizSubmission);

export default router;
