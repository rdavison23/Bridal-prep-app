import app from './server.js';
import supertest from 'supertest';

const request = supertest(app);

describe('Quiz Endpoints', () => {
  it('GET /api/quiz should show questions', async () => {
    const res = await request.get('/api/quiz');
    expect(res.status).toBe(200);
  });
});

describe('GET /api/checklist/:userId', () => {
  it('returns checklist items for a valid user', async () => {
    const res = await request.get('/api/checklist/1');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    const items = res.body.filter(Boolean);

    if (items.length > 0) {
      const item = items[0];

      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('item_text');
      expect(item).toHaveProperty('is_completed');
      expect(item).toHaveProperty('user_id');
    }
  });
});
