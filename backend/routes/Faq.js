const Express = require('express')
const mysql = require('mysql2')
const db = require("../Connection/connect.js")
const route = Express.Router()


route.post('/', (req,res) => {
  const data = req.body;
  let sql = 'INSERT INTO faqs SET?';
  let query = db.query(sql,data,(err,result) => {
      if(err) throw err;
      console.log(result);
      res.send('Inserted succesfully')
  });
});



route.get('/', (req, res) => {
    let sql = 'SELECT * FROM faqs';
    let query = db.query(sql, (err, results) => {
      if (err) throw err;
      console.log(results);
      res.json(results); // Send the results as JSON response
    });
  });


module.exports = route;