import app from '../../server.js';
import supertest from 'supertest';
import jwt from 'jsonwebtoken';

const request = supertest(app);

// Signup success and signup duplicate email
describe('Tests for GET /api/auth/signup endpoint', () => {
  it('signup new user successful', async () => {
    const res = await request
      .post('/api/auth/signup')
      .send({
        name: 'Happy Cares',
        email: `happy@cares.com`,
        password: 'PasswordPassword'
      });

    expect(res.status).toBe(201);

    expect(res.body).toHaveProperty('token');
    expect(res.body.user).toHaveProperty('id');
    expect(res.body.user.name).toBe('Happy Cares');
    expect(res.body.user.email).toMatch('happy@cares.com');
  });

  it('no signup for duplicate email', async () => {
    const res = await request
      .post('/api/auth/signup')
      .send({
        name: 'Happy Cares',
        email: `happy@cares.com`,
        password: 'PasswordPassword'
      });

      const duplicateRes = await request
      .post('/api/auth/signup')
      .send({
        name: 'Happy Cares',
        email: `happy@cares.com`,
        password: 'PasswordPassword'
      });

    expect(res.status).toBe(401);

    expect(res.body.error).toBe('An account with this email already exists');
  });
});

describe('Tests for GET /api/auth/me endpoint', () => {
  it('show that user is unauthorized', async () => {
    const res = await request.get('/api/auth/me');
    expect(res.status).toBe(401);
    expect(res.body.error).toBe('Missing authorization header.')
  });
});