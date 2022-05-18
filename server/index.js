// require express
const express=require('express');
const mongoose=require('mongoose');
const connectDB=require('./src/config/connectDB')
const app=express(); 
require("dotenv").config();
require ('module-alias/register');

// connect with the database
connectDB();

// CORS
app.use(express.json()); // changer la forme des donnees
// Add headers before the routes are defined
// app.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// });


// API
app.use("/user", require("@routes/user-route"));
app.use("/voiture", require("@routes/voiture-route"));

//PORt
const Port =8000
app.listen(Port,(err)=>{
err?console.log(err):console.log(  `the server is running on the ${Port} `);
})
