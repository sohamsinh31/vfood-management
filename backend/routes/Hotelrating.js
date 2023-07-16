const express = require('express');
const router = express.Router();
const db = require('../Connection/connect');
const mysql = require('mysql2');


router.post('/', (req, res) => {
  const data = req.body;
  let sql = 'INSERT INTO hotel_rating SET ?';
  let query = db.query(sql, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Inserted successfully');
  });
});

// router.get('/', (req, res) => {
//   let sql = 'SELECT * FROM hotel_rating';
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     console.log(results);
//     res.json(results);
//   });
// });
router.get('/', (req, res) => {
  let condition = ""; 
  console.log(req.query.HRID + "\n\n")  
  if (req.query.HRID) {
    condition = `WHERE HRId = ${req.query.HRID}`; 
  }  
  let sql = `SELECT * FROM hotel_rating ${condition}`;
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    // console.log(results);
    res.json(results);
  });
});


module.exports = router;