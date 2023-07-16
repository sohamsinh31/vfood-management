const Express = require('express')
const db = require("../Connection/connect.js")
const route = Express.Router()

// route.post('/',(req,res)=>{
//     async function getData(){
//         console.log(req.body)
//         try{
//             const products = await HOtelModel.create(req.body);
//             res.status(200).json(products)
//         }catch(err){
//             res.status(500).json(err)
//         }
//     }
//     getData();
// })

route.get('/userinfo', (req, res) => {
    let sql = 'SELECT * FROM user';
    let query = db.query(sql, (err, results) => {
      if (err) throw err;
      console.log(results);
      res.json(results); // Send the results as JSON response
    });
  });

route.get('/hotel',(req,res)=>{
    res.send('We are on posts hotel')

})

module.exports = route;