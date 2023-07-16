const Express = require('express')
const mysql = require('mysql2');

const route = Express.Router()

route.post('/',(req,res)=>{
    async function getData(){
    }
    getData();
})

route.get('/get',async (req,res)=>{
    try{
        //console.log(req.query.user)
    }catch(err){
        res.status(400).json(err)
        res.status(500).json(err)
    }
})

route.get('/',async (req,res)=>{
    try{
        //console.log(req.query.user,req.query.food)
        //console.log(products.length)
    }catch(err){
        res.status(400).json(err)
        res.status(500).json(err)
    }
})

route.delete('/', async (req,res)=>{
    try{

    }
catch(err){
    res.status(400).json(err)
    res.status(500).json(err)
}
})

module.exports = route;