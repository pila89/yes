// require express
const express=require('express');
const mongoose=require('mongoose');
const connectDB=require('./src/config/connectDB')
const app=express(); 
require("dotenv").config();
require ('module-alias/register');
const path = require("path")

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

app.use(express.static(path.join(__dirname, 'src/public')))
// les images non acceccible men navigateur 
// lazmk t7ot un static folder 
//telechargeent\yes\server\src\public
//hadhe el path lel folder bech najmou nod5lou men navigateur
// ki bech tsajel fl base lazmk dima tsajel b link ya3ni esm taswira t7otou fl base
// bech men el front tnajem tod5el
// çava ya weldi yara7me weldik
//wlhi ya3tik sa77a
 // fl cas mta3i juste public 5ater ma3andich src oui 
 // aya mrigel ya 5ouay ;)3ychou
console.log(path.join(__dirname, 'src/public'))

// API
app.use("/user", require("@routes/user-route"));
app.use("/voiture", require("@routes/voiture-route"));
app.use("/image", require("@routes/images.routes"));


//PORt
const Port =8000
app.listen(Port,(err)=>{
err?console.log(err):console.log(  `the server is running on the ${Port} `);
})
