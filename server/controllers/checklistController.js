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

// TOGGLE completion
export const toggleChecklistItem = async (req, res) => {
  const { userId, id } = req.params;

  try {
    const result = await db.query(
      `UPDATE bridal_prep.checklist_items
       SET is_completed = NOT is_completed
       WHERE id = $1 AND user_id = $2
       RETURNING *`,
      [id, userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error toggling item:', err);
    res.status(500).json({ error: 'Failed to toggle item' });
  }
};

// DELETE item
export const deleteChecklistItem = async (req, res) => {
  const { userId, id } = req.params;

  try {
    await db.query(
      'DELETE FROM bridal_prep.checklist_items WHERE id = $1 AND user_id = $2',
      [id, userId]
    );

    res.json({ success: true });
  } catch (err) {
    console.error('Error deleting item:', err);
    res.status(500).json({ error: 'Failed to delete item' });
  }
};
