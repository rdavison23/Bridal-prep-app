import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

let pool;

if (process.env.NODE_ENV === 'production') {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });

  pool
    .query('SET search_path TO bridal_prep, public;')
    .then(() => console.log('Search path set to bridal_prep'))
    .catch((err) => console.error('Error setting search path:', err));
} else if (process.env.NODE_ENV === 'development') {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

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
