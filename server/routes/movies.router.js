const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "movies"`;

    pool.query(queryText)
    .then((results) => {
        res.send(results.rows)
    }).catch ((err) => {
        console.log('in GET error:', err);
        res.sendStatus(500);
    })
});


module.exports = router;