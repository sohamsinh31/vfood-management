const express = require('express');
const router = express.Router();
const db = require('../Connection/connect');
const mysql = require('mysql2');


router.post('/', (req, res) => {
  let post = { title: 'Post one', body: 'This is post' };
  let sql = 'INSERT INTO category SET ?';
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Inserted successfully');
  });
});

router.get('/', (req, res) => {
  let sql = 'SELECT * FROM category';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.json(results);
  });
});



module.exports = router;