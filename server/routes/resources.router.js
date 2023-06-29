const express = require('express');
const router = express.Router();
const pool = require('../modules/pool'); 
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// Route to retrieve all resources
router.get('/', rejectUnauthenticated,(req, res) => {
  const queryText = 'SELECT * FROM resources WHERE user_id=$1';
  pool.query(queryText, [req.user.id])
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
router.post('/', rejectUnauthenticated, (req, res) => {
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

  // Route to delete a resource
router.delete('/:id',rejectUnauthenticated, (req, res) => {
    // Only allow logged-in users to delete resources
    if (!req.user) {
      return res.sendStatus(401); // Unauthorized
    }
  
    const resourceId = req.params.id;
    const user_id = req.user.id; // Retrieve the user ID from the authenticated user
    const queryText = 'DELETE FROM resources WHERE id = $1 AND user_id = $2';
    const values = [resourceId, user_id];
    pool.query(queryText, values)
      .then((result) => {
        if (result.rowCount === 0) {
          return res.sendStatus(404); // Resource not found or user is not authorized
        }
        res.sendStatus(200);
      })
      .catch((error) => {
        console.error('Error deleting resource:', error);
        res.sendStatus(500);
      });
  });


module.exports = router;