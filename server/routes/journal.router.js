const express = require('express');
const router = express.Router();
const pool = require('../modules/pool'); 

// GET route to fetch all journal entries
router.get('/entries', (req, res) => {
  // Perform a database query to retrieve all journal entries
  const queryText = 'SELECT * FROM entries';
  pool
    .query(queryText)
    .then((result) => {
      const entries = result.rows;
      res.send(entries);
    })
    .catch((error) => {
      console.error('Error fetching journal entries:', error);
      res.sendStatus(500);
    });
});


module.exports = router;