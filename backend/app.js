const express = require('express');
const mysql = require('mysql2');

// Create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vfood'
});

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

const app = express();

// Select posts and return as JSON
app.get('/userinfo', (req, res) => {
  let sql = 'SELECT * FROM user';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.json(results); // Send the results as JSON response
  });
});

app.listen('3000', () => {
  console.log('Server Started on port 3000');
});
