import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true,
  },
  price :{
    type : Number,
    required : true,
  },
  taste:{
    type : String,
    enum : ["spicy","sweet", "sour", "salty"],
    required : true
  },
  is_drink :{
    type : Boolean ,
    default : false

  },
  ingredients:{
    type: [String],
    //enum : ["chicken wings", "spices","sauce"],
    default : []
  },
  num_sales :{
    type: Number,
    default : 0
    
   
  }

});

const MenuItem =
  mongoose.models.MenuItem || mongoose.model("MenuItem", menuItemSchema);

// module.exports = MenuItem;
export default MenuItem;

// {
//   "name" : "chicken wings",
//   "price" : 100,
//   "taste": "spicy",
//   "is_drink" : false, 
//   "ingredients": ["chicken wings" , "spices" , "sauce"],
//   "num_sales"; 62
// }

// nothing checking only git 

// comment added for github