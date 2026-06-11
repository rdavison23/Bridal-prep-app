import express from 'express';
import { pool } from '../db.js';

const router = express.Router();

//GET /api/admin/users
router.get('/users', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, name, email, role, created_at FROM bridal_prep.users'
    );
    //Never send password hash back
    res.json({ users: result.rows });
  } catch (err) {
    console.error('admin get users error:', err);
    res.status(500).json({ error: 'Something went wrong try again' });
  }
});

export default router;
