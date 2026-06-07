import express from 'express';
import jwt from 'jsonwebtoken';
import { pool } from '../db.js';

const router = express.Router();

//GET /api/admin/users
router.get('/users', async (req, res) => {
  //check if logged in
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ error: 'Please login' });
  }

  const token = header.split(' ')[1];

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  //are they an admin
  if (decoded.role !== 'admin') {
    return res.status(403).json({ error: 'Admin only' });
  }
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
