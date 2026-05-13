import { pool } from '../db.js';
import { calculateBudget } from '../utils/calculateBudget.js';

export async function previewBudget(req, res) {
  try {
    const { idealBudget, maxBudget } = req.body;

    const result = calculateBudget({ idealBudget, maxBudget });

    return res.json(result);
  } catch (err) {
    console.error('Error in previewBudget:', err);
    res.status(500).json({ error: 'Failed to calculate budget' });
  }
}

export async function createBudget(req, res) {
  try {
    const { userId = null, idealBudget, maxBudget } = req.body;

    const calc = calculateBudget({ idealBudget, maxBudget });

    const insertQuery = `
      INSERT INTO bridal_prep.budgets (
        user_id,
        ideal_budget,
        max_budget,
        hidden_costs_total,
        final_estimate,
        created_at
      )
      VALUES ($1, $2, $3, $4, $5, NOW())
      RETURNING id;
    `;

    const values = [
      userId,
      calc.idealBudget,
      calc.maxBudget,
      calc.hiddenCostsTotal,
      calc.finalEstimate,
    ];

    const { rows } = await pool.query(insertQuery, values);

    return res.status(201).json({
      id: rows[0].id,
      ...calc,
    });
  } catch (err) {
    console.error('Error in createBudget:', err);
    res.status(500).json({ error: 'Failed to save budget' });
  }
}
