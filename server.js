'use strict';
require('dotenv').config()
const express = require('express');
const server = express();
const cors = require('cors');
const port = 3000;
const db = require('./db');

server.use(express.urlencoded({extended: false}));
server.use(express.json());
server.use(cors())

const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute')
server.use('/cat',catRoute);
server.use('/user',userRoute)


db.on('connected', () => {
    server.listen(port, () => console.log(`Example app listening on port ${port}!`));
});


