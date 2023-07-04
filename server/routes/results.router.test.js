const request = require('supertest');
const app = require('../../server');  // Assuming your Express app is defined in 'app.js'
const pool = require('../modules/pool'); // Import the pool module

// Mock the pool.query() function to avoid database calls during testing
jest.mock('../modules/pool', () => ({
  query: jest.fn(),
}));

// Tests for the resource router
describe('Resource Router', () => {
  afterAll(() => {
    // Clean up the mock after all tests are done
    jest.unmock('../modules/pool');
  });

  test('GET /depression - should return the depression response', async () => {
    // Mock the pool.query() function to return a sample result
    pool.query.mockResolvedValueOnce({
      rows: [{ id: 1, user_id: 1, score: 5, note: 'Some note' }],
    });

    // Send a GET request to /depression
    const response = await request(app).get('/api/resources/depression');

    // Verify the response
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: 1, user_id: 1, score: 5, note: 'Some note' });
  });

  test('POST /depression - should submit the depression response', async () => {
    // Mock the pool.query() function to return a sample result
    pool.query.mockResolvedValueOnce({
      rows: [{ id: 1, user_id: 1, score: 5, note: 'Some note' }],
    });

    // Send a POST request to /depression with the response data
    const response = await request(app)
      .post('/api/resources/depression')
      .send({ user_id: 1, score: 5, note: 'Some note' });

    // Verify the response
    expect(response.status).toBe(201);
    expect(response.body).toEqual({ id: 1, user_id: 1, score: 5, note: 'Some note' });
  })
});