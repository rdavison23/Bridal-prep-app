import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool } from './db.js';

//import budgetRoutes from './routes/budgetRoutes.js';
//import checklistRoutes from './routes/checklistRoutes.js';
import quizRoutes from './routes/quizRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

//API routes
//app.use('/api/budget', budgetRoutes);
//app.use('/api/checklist', checklistRoutes);
app.use('/api/quiz', quizRoutes);

app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users LIMIT 1;');
    res.json({ connected: true, sample: result.rows });
  } catch (err) {
    res.status(500).json({ connected: false, error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
