const express = require('express');
const router = express.Router();
const pool = require('../modules/pool'); 

// GET route to fetch depression response
router.get('/depression', (req, res) => {
    // Perform a database query to retrieve the depression response
    const queryText = 'SELECT * FROM "response" WHERE questionnaire_type = $1';
    const values = ['depression'];
    
    pool
      .query(queryText, values)
      .then((result) => {
        const response = result.rows[0];
        res.send(response);
      })
      .catch((error) => {
        console.error('Error fetching depression response:', error);
        res.sendStatus(500);
      });
  });
 
// POST route to submit depression response
router.post('/depression', (req, res) => {
    const { user_id, score, note } = req.body;
    
    // Perform a database query to insert the depression response
    const queryText = 'INSERT INTO "response" (user_id, questionnaire_type, score, note, createdate) VALUES ($1, $2, $3, $4, $5)';
    const values = [user_id, 'depression', score, note, new Date()];
    
    pool
      .query(queryText, values)
      .then(() => {
        res.sendStatus(201);
      })
      .catch((error) => {
        console.error('Error submitting depression response:', error);
        res.sendStatus(500);
      });
  });
  

// GET route to fetch anxiety response
router.get('/anxiety', (req, res) => {
    // Perform a database query to retrieve the anxiety response
    const queryText = 'SELECT * FROM "response" WHERE questionnaire_type = $1';
    const values = ['anxiety'];
    
    pool
      .query(queryText, values)
      .then((result) => {
        const response = result.rows[0];
        res.send(response);
      })
      .catch((error) => {
        console.error('Error fetching anxiety response:', error);
        res.sendStatus(500);
      });
  });

// Route for submitting anxiety questionnaire responses
router.post('/anxiety/response', (req, res) => {
  // Handle submitting anxiety questionnaire responses
});

// GET route to fetch stress response
router.get('/stress', (req, res) => {
    // Perform a database query to retrieve the stress response
    const queryText = 'SELECT * FROM "response" WHERE questionnaire_type = $1';
    const values = ['stress'];
    
    pool
      .query(queryText, values)
      .then((result) => {
        const response = result.rows[0];
        res.send(response);
      })
      .catch((error) => {
        console.error('Error fetching stress response:', error);
        res.sendStatus(500);
      });
  });

// Route for submitting stress questionnaire responses
router.post('/stress/response', (req, res) => {
  // Handle submitting stress questionnaire responses
});

module.exports = router;