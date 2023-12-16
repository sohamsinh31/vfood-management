require('dotenv').config()
const mysql = require('mysql2');

// Create connection
const db = mysql.createConnection({
  host: process.env.HOSTIP,
  user: process.env.HOSTUSER,
  password: process.env.HOSTPS,
  database: process.env.HOSTDB
});

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

module.exports = db;
