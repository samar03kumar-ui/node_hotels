import mongoose from "mongoose"; 
//const mongoose = require('mongoose');
//const { age } = require('../notes');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    //unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

// create peron model

const Person = mongoose.models.Person || mongoose.model("Person", personSchema);
// module.exports = Person;
export default Person;

// {
//   "name" : "Alice",
//   "age" : 28,
//   "work" : "chef",
//   "mobile" : "1234567890",
//   "email" : "alic@this.getMaxListeners.com",
//   "address" : "123 main strt , city",
//   "salary" : 60000

// }
