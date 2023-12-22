require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const mongooseString = process.env.DATABASE_URL;
const app = express();

app.use(express.json());


mongoose.connect(mongooseString);

const database = mongoose.connection;

database.on('error',(err) => console.log(err))
database.on('connected',() => console.log('Database connected ....'));

app.listen(3000, () =>{
    console.log("Server started in port: 3000");
})