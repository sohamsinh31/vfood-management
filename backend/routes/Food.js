const Express = require('express')
const mysql = require('mysql2');
const route = Express.Router()
const db = require("../Connection/connect.js")

route.get('/',(req,res)=>{
    let sql = 'SELECT * FROM food';
    let query = db.query(sql, (err, results) => {
      if (err) throw err;
      console.log(results);
      res.json(results); // Send the results as JSON response
    });
})


route.get('/fetch',async (req,res)=>{
    try{
        //console.log(req.query.hid,"hii")
    }catch(err){
        res.status(400).json(err)
        //res.status(500).json(err)
    }
})

route.get('/test', async (req,res)=>{
    try{
    }catch(err){
        res.status(400).json(err)
        //res.status(500).json(err)
    }
})

module.exports = route;