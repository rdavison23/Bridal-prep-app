console.log('>>> RUNNING server/server.js <<<');
import express from 'express';
import {
  getChecklistItems,
  addChecklistItem,
  toggleChecklistItem,
  deleteChecklistItem,
  resetChecklist,
} from '../controllers/checklistController.js';

const router = express.Router();

router.get('/test', (req, res) => {
  res.send('Checklist router is working');
});

// GET all items for a user
router.get('/:userId', getChecklistItems);

// ADD new item
router.post('/:userId', addChecklistItem);

// TOGGLE completion
router.patch('/:userId/:id', toggleChecklistItem);

// DELETE item
router.delete('/:userId/:id', deleteChecklistItem);

// RESET to defaults
router.post('/:userId/reset', resetChecklist);

export default router;
