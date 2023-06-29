const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// TODO: Make sure to protect these routes (rejectUnauthenticated)

// GET route to fetch depression response
router.get('/depression', rejectUnauthenticated, (req, res) => {
  // Perform a database query to retrieve the depression response
  // TODO: Update all queries so they filter by user_id
  const queryText = 'SELECT * FROM "response" WHERE questionnaire_type=$1 AND user_id=$2 ORDER BY createdate DESC LIMIT 1';
  const values = ['depression', req.user.id];

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
router.post('/depression', rejectUnauthenticated, (req, res) => {
  const { user_id, score, note } = req.body;
  console.log("hello", req.body);

  const insertQueryText = 'INSERT INTO "response" (user_id, questionnaire_type, score, note) VALUES ($1, $2, $3, $4) RETURNING *';
  const insertValues = [user_id, 'depression', score, note];

  pool
    .query(insertQueryText, insertValues)
    .then((result) => {
      res.status(201).send(result.rows[0]);
    })
    .catch((insertError) => {
      console.error('Error submitting depression response:', insertError);
      res.sendStatus(500);
    });
});


// GET route to fetch anxiety response
router.get('/anxiety', rejectUnauthenticated, (req, res) => {
  // Perform a database query to retrieve the anxiety response
  const queryText = 'SELECT * FROM "response" WHERE questionnaire_type = $1 AND user_id =$2 ORDER BY createdate DESC LIMIT 1';
  const values = ['anxiety', req.user.id];

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

router.post('/anxiety', rejectUnauthenticated, (req, res) => {
  const { user_id, score, note } = req.body;

  // Perform a database query to insert the anxiety response
  if (!score) {
    res.status(400).send({ error: 'Score value is required' });
    return;
  }
  const insertQueryText = 'INSERT INTO "response" (user_id, questionnaire_type, score, note) VALUES ($1, $2, $3, $4) RETURNING *';
  const insertValues = [user_id, 'anxiety', score, note];
  console.log('user_id:', user_id, 'score:', score, 'note:', note);

  pool
    .query(insertQueryText, insertValues)
    .then((result) => {

      const lastInsertedScore = result.rows[0];
      // Send the last inserted score in the response
      res.status(201).send(lastInsertedScore);
    })
    .catch((insertError) => {
      console.error('Error submitting anxiety response:', insertError);
      res.sendStatus(500);
    });
});

// GET route to fetch stress response
router.get('/stress', rejectUnauthenticated, (req, res) => {
  // Perform a database query to retrieve the stress response
  const queryText = 'SELECT * FROM "response" WHERE questionnaire_type = $1 AND user_id=$2 ORDER BY createdate DESC LIMIT 1';
  const values = ['stress', req.user.id];

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
router.post('/stress', rejectUnauthenticated, (req, res) => {
  const { user_id, score, note } = req.body;

  const insertQueryText = 'INSERT INTO "response" (user_id, questionnaire_type, score, note) VALUES ($1, $2, $3, $4) RETURNING *';
  const insertValues = [user_id, 'stress', score, note];

  pool
    .query(insertQueryText, insertValues)
    .then((result) => {
      const lastInsertedScore = result.rows[0];
      res.status(201).send(lastInsertedScore);

    })
    .catch((insertError) => {
      console.error('Error submitting stress response:', insertError);
      res.sendStatus(500);
    });
});
module.exports = router;