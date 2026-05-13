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

export async function getLatestBudget(req, res) {
  try {
    // Require login
    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: 'Login required' });
    }

    const userId = req.user.id;

    const query = `
        SELECT
          id,
          user_id AS "userId",
          ideal_budget AS "idealBudget",
          max_budget AS "maxBudget",
          hidden_costs_total AS "hiddenCostsTotal",
          final_estimate AS "finalEstimate",
          created_at AS "createdAt"
        FROM bridal_prep.budgets
        WHERE user_id = $1
        ORDER BY created_at DESC
        LIMIT 1;
      `;

    const { rows } = await pool.query(query, [userId]);

    if (rows.length === 0) {
      return res.status(404).json({
        error: 'No budget found for this user',
        empty: true,
        message: 'User has not created a budget yet',
      });
    }

    const budget = rows[0];

    const requiredFields = [
      'id',
      'userId',
      'idealBudget',
      'maxBudget',
      'hiddenCostsTotal',
      'finalEstimate',
      'createdAt',
    ];

    for (const field of requiredFields) {
      if (budget[field] === undefined) {
        console.warn(
          `Budget integrity warning: missing field "${field}" for user ${userId}`
        );
      }
    }

    return res.status(200).json({
      success: true,
      budget,
    });
  } catch (err) {
    console.error(' Error in getLatestBudget:', {
      message: err.message,
      stack: err.stack,
      userId: req.user?.id,
    });

    return res.status(500).json({
      error: 'Failed to fetch budget',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
  }
}
