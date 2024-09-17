const request = require('supertest');
const app = require('../app'); // Adjust if necessary

describe('User Routes', () => {
  let token;

  beforeAll(async () => {
    // Log in and get a token
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'admin@example.com', // Admin user
        password: 'adminpassword',
      });
    token = response.body.token;
  });

  it('should get all users', async () => {
    const response = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should delete a user', async () => {
    const userId = 'someUserId'; // Use a valid user ID here
    const response = await request(app)
      .delete(`/api/users/${userId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
});
