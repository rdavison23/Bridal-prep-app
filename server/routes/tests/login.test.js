import request from 'supertest';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import app from '../../server.js';
import { pool } from '../../db.js';

jest.mock('../../db.js', () => ({
    pool: {
        query: jest.fn(),
    },
}));

jest.mock('bcryptjs');
jest.mock('jsonwebtoken');

describe('POST /api/auth/login', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('returns 401 when password is incorrect', async () => {
        pool.query.mockResolvedValue({
            rows: [{
                id: 1,
                email: 'test@test.com',
                password_hash: 'hashedpassword',
                role: 'bride',
            }],
        });

        bcrypt.compare.mockResolvedValue(false);

        const res = await request(app)
            .post('/api/auth/login')
            .send({ email: 'test@test.com', password: 'wrongpassword' });

        expect(res.status).toBe(401);
        expect(res.body.error).toBe('Invalid email or password');
    });

    it('logs user in successfully', async () => {
        pool.query.mockResolvedValue({
            rows: [{
                id: 1,
                name: 'Tester1',
                email: 'test@test.com',
                password_hash: 'hashedpassword',
                role: 'bride',
            }],
        });

        bcrypt.compare.mockResolvedValue(true);
        jwt.sign.mockReturnValue('mock-token');

        const res = await request(app)
            .post('/api/auth/login')
            .send({ email: 'test@test.com', password: 'password123' });

        expect(res.status).toBe(200);
        expect(res.body.token).toBe('mock-token');
        expect(res.body.user).toEqual({
            id: 1,
            name: 'Tester1',
            email: 'test@test.com',
            role: 'bride',
        });
    });

    it('returns 500 when database fails', async () => {
        pool.query.mockRejectedValue(new Error('Database error'));

        const res = await request(app)
            .post('/api/auth/login')
            .send({ email: 'test@test.com', password: 'password123' });

        expect(res.status).toBe(500);
        expect(res.body.error).toBe('Something went wrong. Please try again');
    });
});
