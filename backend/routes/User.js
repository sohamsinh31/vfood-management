const Express = require('express')
const mysql = require('mysql2');
const db = require("../Connection/connect.js")
const route = Express.Router()

route.get('/',async (req,res)=>{
    let sql = 'SELECT * FROM user';
    let query = db.query(sql, (err, results) => {
      if (err) throw err;
      console.log(results);
      res.json(results); // Send the results as JSON response
    });
})

route.post('/',async (req,res)=>{
    try{
    }catch(err){
    }
})

module.exports = route;

