const express = require('express');
const router = express.Router();
const pool = require('../modules/pool'); 

// GET route to fetch depression response
router.get('/depression', (req, res) => {
    // Perform a database query to retrieve the depression response
    const queryText = 'SELECT * FROM "response" WHERE questionnaire_type = $1 ORDER BY createdate DESC LIMIT 1';
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
  console.log(req.body);

  const insertQueryText = 'INSERT INTO "response" (user_id, questionnaire_type, score, note, createdate) VALUES ($1, $2, $3, $4, $5)';
  const insertValues = [user_id, 'depression', score, note, new Date()];

  pool
    .query(insertQueryText, insertValues)
    .then(() => {
      const fetchQueryText = 'SELECT score FROM "response" WHERE questionnaire_type = $1 ORDER BY createdate DESC LIMIT 1';
      const fetchValues = ['depression'];

      pool
        .query(fetchQueryText, fetchValues)
        .then((result) => {
          const lastInsertedScore = result.rows[0];
          res.status(201).send(lastInsertedScore);
        })
        .catch((fetchError) => {
          console.error('Error fetching the last inserted score:', fetchError);
          res.sendStatus(500);
        });
    })
    .catch((insertError) => {
      console.error('Error submitting depression response:', insertError);
      res.sendStatus(500);
    });
});
  

// GET route to fetch anxiety response
router.get('/anxiety', (req, res) => {
    // Perform a database query to retrieve the anxiety response
    const queryText = 'SELECT * FROM "response" WHERE questionnaire_type = $1 ORDER BY createdate DESC LIMIT 1';
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

  router.post('/anxiety', (req, res) => {
    const { user_id, score, note } = req.body;
      
    // Perform a database query to insert the anxiety response
    if(!score) {
      res.status(400).send({ error: 'Score value is required' });
      return;
  }
    const insertQueryText = 'INSERT INTO "response" (user_id, questionnaire_type, score, note, createdate) VALUES ($1, $2, $3, $4, $5)';
    const insertValues = [user_id, 'anxiety', score, note, new Date()];
    console.log('user_id:', user_id, 'score:', score, 'note:', note);
  
    pool
      .query(insertQueryText, insertValues)
      .then(() => {
        // After the insert query has been successful, perform another query to fetch the last inserted score
        const fetchQueryText = 'SELECT score FROM "response" WHERE questionnaire_type = $1 ORDER BY createdate DESC LIMIT 1';
        const fetchValues = ['anxiety'];
  
        pool
          .query(fetchQueryText, fetchValues)
          .then((result) => {
            const lastInsertedScore = result.rows[0];
            // Send the last inserted score in the response
            res.status(201).send(lastInsertedScore);
          })
          .catch((fetchError) => {
            console.error('Error fetching the last inserted score:', fetchError);
            res.sendStatus(500);
          });
      })
      .catch((insertError) => {
        console.error('Error submitting anxiety response:', insertError);
        res.sendStatus(500);
      });
  });

// GET route to fetch stress response
router.get('/stress', (req, res) => {
    // Perform a database query to retrieve the stress response
    const queryText = 'SELECT * FROM "response" WHERE questionnaire_type = $1 ORDER BY createdate DESC LIMIT 1';
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


// POST route for stress
router.post('/stress', (req, res) => {
  const { user_id, score, note } = req.body;

  const insertQueryText = 'INSERT INTO "response" (user_id, questionnaire_type, score, note, createdate) VALUES ($1, $2, $3, $4, $5)';
  const insertValues = [user_id, 'stress', score, note, new Date()];

  pool
    .query(insertQueryText, insertValues)
    .then(() => {
      const fetchQueryText = 'SELECT score FROM "response" WHERE questionnaire_type = $1 ORDER BY createdate DESC LIMIT 1';
      const fetchValues = ['stress'];

      pool
        .query(fetchQueryText, fetchValues)
        .then((result) => {
          const lastInsertedScore = result.rows[0];
          res.status(201).send(lastInsertedScore);
        })
        .catch((fetchError) => {
          console.error('Error fetching the last inserted score:', fetchError);
          res.sendStatus(500);
        });
    })
    .catch((insertError) => {
      console.error('Error submitting stress response:', insertError);
      res.sendStatus(500);
    });
});
module.exports = router;