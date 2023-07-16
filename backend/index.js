const express = require('express');

const session = require("express-session")

const app = express()


const BodyParser = require('body-parser')

const Hotel = require('./routes/Hotel')

const Product = require('./routes/Food')

const Like = require('./routes/Like')

const User = require('./routes/User')

const db = require('./Connection/connect.js')

const cors = require('cors')


app.use(BodyParser.json())

app.use(cors())

app.use('/food',Product)

app.use('/like',Like);

app.use('/hotel',Hotel);

app.use('/user',User)

app.get('/',(req,res)=>{
    res.send('We are on home')
});

app.listen(5000)