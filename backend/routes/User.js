const express = require('express');
const router = express.Router();
const db = require('../Connection/connect');
const mysql = require('mysql2');


router.post('/', (req, res) => {
  const data = req.body;
  let sql = 'INSERT INTO user SET ?';
  let query = db.query(sql, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Inserted successfully');
  });
});

router.post('/fetch', (req, res) => {
  let conditions = [];

  if (req.body.UserID) {
    conditions.push(`userId = ${req.body.UserID}`);
  }

  if (req.body.email) {
    conditions.push(`Email = '${req.body.email}'`);
  }

  if (req.body.username) {
    conditions.push(`Name = '${req.body.username}'`);
  }

  if (req.body.password) {
    conditions.push(`Password = '${req.body.password}'`);
  }

  // Combine all conditions using 'AND' to form the WHERE clause
  let conditionString = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

  let sql = `SELECT * FROM \`user\` ${conditionString}`;

  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
})

// router.get('/', (req, res) => {
//   let sql = 'SELECT * FROM user';
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     console.log(results);
//     res.json(results);
//   });
// });

router.get('/', (req, res) => {
  let conditions = []; // An array to store individual conditions

  if (req.query.id) {
    conditions.push(`userId = ${req.query.id}`);
  }

  // Combine all conditions using 'AND' to form the WHERE clause
  let conditionString = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

  let sql = `SELECT * FROM \`user\` ${conditionString}`;


  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});




module.exports = router;