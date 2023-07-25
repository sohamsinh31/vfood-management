const Express = require('express')
const mysql = require('mysql2');
const route = Express.Router()
const db = require("../Connection/connect.js")


route.post('/', (req, res) => {
  const data = req.body;
  let sql = 'INSERT INTO food SET ?';
  let query = db.query(sql, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Inserted successfully');
  });
});

// route.get('/', (req, res) => {
//     let sql = 'SELECT * FROM food';
//     let query = db.query(sql, (err, results) => {
//       if (err) throw err;
//       console.log(results);
//       res.json(results); // Send the results as JSON response
//     });
//   });

route.get('/', (req, res) => {
  let condition = "";
  if (req.query.id) {
    condition = `WHERE foodId = ${req.query.id}`;
  }
  let sql = `SELECT * FROM food ${condition}`;
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    // console.log(results);
    res.json(results);
  });
});




module.exports = route;