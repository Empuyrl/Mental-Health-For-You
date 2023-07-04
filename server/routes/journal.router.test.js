const request = require('supertest');
const app = require('../app'); // Assuming your Express app is defined in 'app.js'
const pool = require('../modules/pool'); // Import the pool module

// Mock the pool.query() function to avoid database calls during testing
jest.mock('../modules/pool', () => ({
  query: jest.fn(),
}));

// Tests for the journal router
describe('Journal Router', () => {
  afterAll(() => {
    // Clean up the mock after all tests are done
    jest.unmock('../modules/pool');
  });

  test('GET /entries - should return all journal entries', async () => {
    // Mock the pool.query() function to return a sample result
    pool.query.mockResolvedValueOnce({
      rows: [{ id: 1, entry_text: 'Entry 1', createdate: new Date(), category: 'Category 1' }],
    });

    // Send a GET request to /entries
    const response = await request(app).get('/entries');

    // Verify the response
    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ id: 1, entry_text: 'Entry 1', createdate: expect.anything(), category: 'Category 1' }]);
  });

  test('POST /entries - should create a new journal entry', async () => {
    // Send a POST request to /entries with the entry data
    const response = await request(app).post('/entries').send({
      entry_text: 'New Entry',
      category: 'New Category',
    });

    // Verify the response
    expect(response.status).toBe(201);
  });

  test('PUT /entries/:id - should update a journal entry', async () => {
    // Send a PUT request to /entries/:id with the entry data
    const response = await request(app).put('/entries/1').send({
      entry_text: 'Updated Entry',
      category: 'Updated Category',
    });

    // Verify the response
    expect(response.status).toBe(200);
  });

  test('DELETE /entries/:id - should delete a journal entry', async () => {
    // Send a DELETE request to /entries/:id
    const response = await request(app).delete('/entries/1');

    // Verify the response
    expect(response.status).toBe(200);
  });
});

