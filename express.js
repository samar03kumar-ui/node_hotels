import express from "express";
import db from "./db.js";
import Person from "./models/person.js";
import MenuItem from "./models/MenuItem.js";
import bodyParser from "body-parser";
import personRoutes from "./routes/personRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";

const app = express();
//const db = require('./db.js');

app.use(bodyParser.json());

// const bodyparser = require('body-parser');
// app.use(bodyParser.json());



//const Person = require('./models/Person.js');

app.get("/",  (req, res) => {
  res.send("Hello World");
});
// app.get('/chicken', (req, res)=>{
//   res.send('sure')
// })
// app.get('/idli', (req,res)=>{
//   var coustomized_idli = {
//     name : ' rava idli',
//     size: ' 10 cm ',
//     is_sambhar: 'true',
//     is_chutney : ' false',


//   }
//   res.send(coustomized_idli)
// })

// app.post("/person", (req, res) => {
//   const data = req.body; // assuming the request body contains person data

//   // create new  document using moongoose model

//   const newPerson = new Person();
//   //   newPerson.name = data.name;

//   //   newPerson.age = data.age;
//   //   newPerson.mobile = data.mobile;
//   //   newPerson.email = data.email;
//   //   newPerson.adress = data.adress;
//   // }). this method is time consuming

//   // save the new person database

//   newPerson.save((error, savedPerson) => {
//     if (error) {
//       console.log("error saving person", error);
//       res.status(500).json({ error: "Internal server error" });
//     } else {
//       console.log("data saved succesfully");
//       res.status(200).json(savedPerson);
//     }
//   });
// });




// get method for get the person 




app.use('/MenuItem' , menuRoutes);



app.use('/person' , personRoutes);
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
