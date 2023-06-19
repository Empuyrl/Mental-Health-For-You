const express = require('express');
const router = express.Router();

// GET route to fetch depression response
router.get('/depression', (req, res) => {
    // Perform a database query to retrieve the depression response
    const queryText = 'SELECT * FROM depression_response';
    pool
      .query(queryText)
      .then((result) => {
        const response = result.rows[0];
        res.send(response);
      })
      .catch((error) => {
        console.error('Error fetching depression response:', error);
        res.sendStatus(500);
      });
  });
  // Route for submitting depression questionnaire responses
  router.post('/depression/response', (req, res) => {
    // Handle submitting depression questionnaire responses
    // Example:
    const { answers } = req.body;
    // Process the submitted answers and save them to the database
    res.sendStatus(200);
  });
  

// GET route to fetch anxiety response
router.get('/anxiety', (req, res) => {
    // Perform a database query to retrieve the anxiety response
    const queryText = 'SELECT * FROM anxiety_response';
    pool
      .query(queryText)
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
    const queryText = 'SELECT * FROM stress_response';
    pool
      .query(queryText)
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