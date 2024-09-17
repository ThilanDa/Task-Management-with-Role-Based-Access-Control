const request = require('supertest');
const app = require('../app'); // Adjust if necessary

describe('Task Routes', () => {
  let token;

  beforeAll(async () => {
    // Log in and get a token
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'john@example.com',
        password: 'password123',
      });
    token = response.body.token;
  });

  it('should create a new task', async () => {
    const response = await request(app)
      .post('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'New Task',
        description: 'Task description',
        assignedTo: 'someUserId', // Use valid user ID here
      });
    expect(response.status).toBe(201);
  });

  it('should get tasks', async () => {
    const response = await request(app)
      .get('/api/tasks')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
