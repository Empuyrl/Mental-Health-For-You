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

// POST route to create a new journal entry
router.post('/entries', (req, res) => {
    // Extract data from the request body
    //text for the entry and category for where it's held with the date
    const { entry_text, category } = req.body;
    const createdate = new Date();
  
    // Perform a database query to insert a new journal entry
    const queryText = 'INSERT INTO entries (entry_text, createdate, category) VALUES ($1, $2, $3)';
    const values = [entry_text, createdate, category];
    pool
      .query(queryText, values)
      .then(() => {
        res.sendStatus(201);
      })
      .catch((error) => {
        console.error('Error creating journal entry:', error);
        res.sendStatus(500);
      });
  });

  // PUT route to update a journal entry
router.put('/entries/:id', (req, res) => {
    // Extract entry ID from the request parameters
    const entryId = req.params.id;
    // Extract updated entry text from the request body
    const { entry_text } = req.body;
  
    // Perform a database query to update the journal entry
    const queryText = 'UPDATE entries SET entry_text = $1 WHERE id = $2';
    const values = [entry_text, entryId];
    pool
      .query(queryText, values)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.error('Error updating journal entry:', error);
        res.sendStatus(500);
      });
  });

//   router.delete('/entries/:id, (req, res) => {

// })


module.exports = router;