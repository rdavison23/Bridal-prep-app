import server from './server.js';
import supertest from 'supertest';

const requestWithSupertest = supertest(server);

describe('Quiz Endpoints', () => {
  it('GET /api/quiz should show questions', async () => {
    return supertest(server).get('/trivia/questions').expect(200);
  });
});
