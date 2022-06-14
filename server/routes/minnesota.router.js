const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET route for all problems
router.get('/problems', (req, res) => {
    const sqlText = `SELECT * FROM problems ORDER BY id;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Problems from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        });
});

// GET route for all zones
router.get('/zones', (req, res) => {
    const sqlText = `SELECT * FROM zones ORDER BY id;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Zones from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        });
});

// GET route for all areas
router.get('/areas', (req, res) => {
    const sqlText = `SELECT * FROM areas ORDER BY id;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Areas from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        });
});

module.exports = router;
