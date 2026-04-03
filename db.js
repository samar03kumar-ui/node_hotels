// for data base connection
 //const mongoose = require('mongoose');
 import mongoose from "mongoose";


 // define the mongodb connection url

//const mongoURL = 'mongodb://localhost:27017/mydatabases'

//require('dotenv').config();
import dotenv from "dotenv";
dotenv.config();

const mongoURL = process.env.MONGODB_URL;
console.log("Mongo URL:", mongoURL);


// se† up mongodb connection

mongoose.connect(mongoURL);

// mongoose.connect(mongoURL,{
//   useNewUrlParser:true,
//   useUnifiedTopology: true
// })
// get the default connection 
// mongoose maintains a default connection object representing the mongodb connection 
const db = mongoose.connection;

// define event listerner for database connection 

db.on('connected', ()=>{
  console.log('connected to server');
})
db.on('error',(err)  => {
  console.log('server error', err);
});
db.on('disconnected', () => {
  console.log('server disconnected');
});


// Export the database connection 

//module.exports = db;
export default db;