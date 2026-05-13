import express from 'express';
import {
  previewBudget,
  createBudget,
  getLatestBudget,
} from '../controllers/budgetController.js';

const router = express.Router();

// Calculate only (no DB save)
router.post('/preview', previewBudget);

// Calculate + save to DB
router.post('/', createBudget);

// Get last saved budget for a user
router.get('/latest', getLatestBudget);

export default router;
