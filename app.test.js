const request = require('supertest');
const app = require('./app');

describe('App Tests', () => {
  test('GET / returns hello message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Hello CI/CD World');
  });

  test('GET /health returns healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
  });
});