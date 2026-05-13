import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

let pool;

if (process.env.NODE_ENV !== 'test') {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  // Force the correct schema for ALL queries
  pool
    .query('SET search_path TO bridal_prep, public;')
    .then(() => console.log('Search path set to bridal_prep'))
    .catch((err) => console.error('Error setting search path:', err));
} else {
  // Mock pool for tests
  pool = {
    query: async () => ({ rows: [] }),
  };
}

export { pool };
