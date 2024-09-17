const request = require('supertest');
const app = require('../app'); // Adjust if necessary

describe('Auth Routes', () => {
  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/auth/signup')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        role: 'Employee',
      });
    expect(response.status).toBe(201);
  });

  it('should login a user', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'john@example.com',
        password: 'password123',
      });
    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});
