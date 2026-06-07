import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { pool } from '../db.js';

const router = express.Router();

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: 'Name, email and password are required' });
  }

  if (password.length < 10) {
    return res
      .status(400)
      .json({ error: 'Password must be at least 10 characters' });
  }

  try {
    const normEmail = email.toLowerCase().trim();

    //check if email already exists
    const existing = await pool.query(
      'SELECT id FROM bridal_prep.users WHERE email = $1',
      [normEmail]
    );
    if (existing.rows.length > 0) {
      return res
        .status(400)
        .json({ error: 'An account with this email already exists' });
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO bridal_prep.users (name, email, password_hash)
     VALUES ($1, $2, $3)
     RETURNING id, name, email, role`,
      [name.trim(), normEmail, passwordHash]
    );
    const user = result.rows[0];

    // Sign JWT
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    //Res NEVER send passwordHash back
    res.status(201).json({
      message: 'Account created successfully',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

// POST /api/Auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const normEmail = email.toLowerCase().trim();

    const result = await pool.query(
      'SELECT id, name, email, password_hash, role FROM bridal_prep.users WHERE email = $1',
      [normEmail]
    );
    const user = result.rows[0];
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({
      message: 'Logged in successfully',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error('Login error', err);
    res.status(500).json({ error: 'Something went wrong. Please try again' });
  }
});

//POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.json({ message: 'logged out succesfully' });
});

//GET /api/auth/me
router.get('/me', async(req, res) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ error: 'Missing authorization header.' });
  }

  try {
    if (!header.startsWith('Bearer ') {
      return res.status(401).json({ error: 'Invalid Bearer token' });
    };
    
    const token = header.slice(7);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const result = await pool.query(
        `SELECT id, name, email, role FROM bridal_prep.users WHERE id = $1`,
        [decoded.userId]
    );

    if (result.rows.length === 0) {
        return res.status(404).json({ error: 'User could not be found.' });
    };

    res.status(200).json({ user: result.rows[0] });
  } catch (error) {
    console.error('Error! Could not get user.');
    res.status(500).json({ error: 'Error! Could not get user.' });
  }
});

export default router;
