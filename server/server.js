import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import budgetRoutes from './routes/budgetRoutes';
import checklistRoutes from './routes/checklistRoutes';
import quizRoutes from './routes/quizRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

//API routes
app.use('/api/budget', budgetRoutes);
app.use('api/checklist', checklistRoutes);
app.use('/api/quiz', quizRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
