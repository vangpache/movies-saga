const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//GET GENRES FOR MOVIE POSTER CLICKED
router.get('/:id', (req, res) => {
    let id = req.params.id
    console.log('details id:', id);

    let queryText = `SELECT "name" FROM "genres" 
                    JOIN "movie_genres" ON "movie_genres"."genres_id" = "genres"."id" 
                    JOIN "movies" ON "movies"."id" = "movie_genres"."movies_id" 
                    WHERE "movies_id" = $1;`
    pool.query(queryText, [id])
        .then((results) => {
            console.log(results.rows);
            res.send(results.rows)
        }).catch((err) => {
            console.log('in GETGENRES error:', err);
            res.sendStatus(500);
        })
})



module.exports = router;