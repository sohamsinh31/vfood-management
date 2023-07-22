const express = require('express');

const app = express()

const BodyParser = require('body-parser')

const cartRoutes = require('./routes/cart');

const Hotel = require('./routes/Hotel')

const food = require("./routes/Food")

const Order = require('./routes/Order')

const Like = require('./routes/Like')

const User = require('./routes/User')

const Faq = require('./routes/Faq')

const Hotelrating = require('./routes/Hotelrating')

const Foodrating = require('./routes/Foodrating')

const Category = require('./routes/Category')

const Delivery = require('./routes/Delivery')

const db = require('./Connection/connect.js')

const cors = require('cors')

app.use(BodyParser.json())

app.use(cors())

app.use('/cart', cartRoutes);

app.use('/food',food)

app.use('/like',Like);

app.use('/hotel',Hotel);

app.use('/user',User)

app.use('/order',Order)

app.use('/faq',Faq)

app.use('/hotelrating',Hotelrating)

app.use('/foodrating',Foodrating)

app.use('/category',Category)

app.use('/delivery',Delivery)

app.get('/',(req,res)=>{
    res.send('We are on home')
});

app.listen(5000)