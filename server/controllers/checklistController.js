import { pool } from '../db.js';
import { defaultChecklistItems } from '../utils/defaultChecklist.js';

// GET all checklist items
export const getChecklistItems = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await pool.query(
      'SELECT * FROM bridal_prep.checklist_items WHERE user_id = $1 ORDER BY id ASC',
      [userId]
    );

    // If user has no items, preload defaults
    if (result.rows.length === 0) {
      const inserted = await preloadDefaults(userId);
      return res.json(inserted);
    }

    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching checklist:', err);
    res.status(500).json({ error: 'Failed to fetch checklist items' });
  }
};

// ADD new item
export const addChecklistItem = async (req, res) => {
  const { userId } = req.params;
  const { itemText } = req.body;

  if (!itemText) {
    return res.status(400).json({ error: 'Item text required' });
  }

  try {
    const result = await db.query(
      'INSERT INTO bridal_prep.checklist_items (user_id, item_text) VALUES ($1, $2) RETURNING *',
      [userId, itemText]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error adding item:', err);
    res.status(500).json({ error: 'Failed to add item' });
  }
};
