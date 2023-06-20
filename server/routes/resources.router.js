const express = require('express');
const router = express.Router();
const pool = require('../modules/pool'); 

// Route to retrieve all resources
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM resources';
  pool.query(queryText)
    .then((result) => {
      const resources = result.rows;
      res.send(resources);
    })
    .catch((error) => {
      console.error('Error fetching resources:', error);
      res.sendStatus(500);
    });
});

// Route to create a new resource
router.post('/', (req, res) => {
    // Only allow logged-in users to add resources
    if (!req.user) {
      return res.sendStatus(401); // Unauthorized
    }
  
    const { resource_type, resource_link, resource_description, createdate } = req.body;
    const user_id = req.user.id; // Retrieve the user ID from the authenticated user
    const queryText = 'INSERT INTO resources (resource_type, resource_link, resource_description, createdate, user_id) VALUES ($1, $2, $3, $4, $5)';
    const values = [resource_type, resource_link, resource_description, createdate, user_id];
    pool.query(queryText, values)
      .then(() => {
        res.sendStatus(201);
      })
      .catch((error) => {
        console.error('Error creating resource:', error);
        res.sendStatus(500);
      });
  });


module.exports = router;