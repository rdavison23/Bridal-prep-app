import app from './server.js';
import supertest from 'supertest';

const request = supertest(app);

describe('Quiz Endpoints', () => {
  it('GET /api/quiz should show questions', async () => {
    const res = await request.get('/api/quiz');
    expect(res.status).toBe(200);
  });
});
