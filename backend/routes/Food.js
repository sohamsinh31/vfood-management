const Express = require('express')
const mysql = require('mysql2');
const route = Express.Router()
const db = require("../Connection/connect.js")


route.post('/', (req, res) => {
  const data = req.body;
  let sql = 'INSERT INTO food SET ?';
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Inserted successfully');
  });
});

route.get('/', (req, res) => {
  let condition = "";
  if (req.query.id) {
    condition = `WHERE foodId = ${req.query.id}`;
  }
  let sql = `SELECT * FROM food ${condition}`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    // console.log(results);
    res.json(results);
  });
});


route.get('/desc', (req, res) => {
  let condition = "";
  if (req.query.id) {
    condition = `WHERE foodId = ${req.query.id}`;
  }
  let sql = `SELECT
        t1.FoodID as id,
        t1.name as FoodName,
        t1.ImageURL as imageurl,
        t1.Description as FoodDescription,
        t1.Price,
        t2.Name as HotelName,
        t2.RestaurantID,
        t2.City
        FROM food as t1
        JOIN restaurant as t2 ON t2.RestaurantID = t1.RestaurantID
        WHERE t1.FoodID = ${req.query.id};
`;
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    // console.log(results);
    res.json(results);
  });
});

module.exports = route;