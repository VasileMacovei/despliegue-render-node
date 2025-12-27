const request = require('supertest');
const app = require('../index');

describe('Pruebas básicas de la app', () => {
  it('GET / devuelve 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('GET /estado devuelve JSON con status OK', async () => {
    const res = await request(app).get('/estado');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('OK');
  });
});
