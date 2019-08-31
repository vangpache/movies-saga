const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//GET ALL MOVIES FROM DB TO RENDER ON LOAD
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

//GET DETAILS FOR MOVIE POSTER CLICKED
router.get('/:id', (req, res) => {
    let id = req.params.id
    console.log('details id:', id);
    // let queryText = `SELECT * FROM "movies" WHERE "id" = $1;`;
    let queryText = `SELECT * FROM "movies" WHERE "id" = $1;`

    pool.query(queryText, [id])
    .then((results) => {
        console.log(results.rows);
        
        res.send(results.rows)
    }).catch((err) => {
        console.log('in GETDETAILS error:', err);
        res.sendStatus(500);
    })
})




module.exports = router;