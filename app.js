'use strict';
require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const db = require('./db');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())

const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute')
app.use('/cat',catRoute);
app.use('/user',userRoute)


db.on('connected', () => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});


