const express = require('express');
const router = express.Router();
const db = require('../Connection/connect');
const mysql = require('mysql2');

router.post('/', (req, res) => {
  const data = req.body;
  let sql = 'INSERT INTO restaurant SET ?';
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Inserted successfully');
  });
});

router.get('/', (req, res) => {
  let condition = "";
  if (req.query.id) {
    condition = `WHERE restaurantId = ${req.query.id}`;
  }
  let sql = `SELECT * FROM restaurant ${condition}`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    // console.log(results);
    res.json(results);
  });
});

module.exports = router;