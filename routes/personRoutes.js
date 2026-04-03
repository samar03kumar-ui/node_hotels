import express from "express";
const router = express.Router();
import Person from "./../models/Person.js";


router.post('/' , async(req , res)=>{
  try{
    const data = req.body
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
  }
  catch(error){
    console.log(error);
    res.status(500).json({error: 'internal server error'});

  }
})
router.get('/', async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; // exact the worktype from the url parameter
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type " });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.put('/:id' ,async(req , res)=>{
  try{
    const personId = req.params.id;
    const updatePersonData = req.body;

    const response = await Person.findByIdAndUpdate(personId ,updatePersonData , {
      new : true,    // return the updated document
      runValidators : true, // run mongoose validation
    })

    if(!response){
      return res.status(404).json({error: 'person not found '})
  
    }

    console.log("data updated");
    res.status(200).json(response);

  }
  catch(error){
    console.log(error);
    res.status(500).json({ error: "internal server error" });

  }
})
router.delete('/:id' , async (req,res)=>{
  try{
    const personId = req.params.id;
    
    const response = await Person.findByIdAndDelete(personId);
      

    if (!response) {
      return res.status(404).json({ error: "person not found " });
    }
    console.log("data deleted");
    res.status(200).json({ message: "Person deleted succesfully" });

  }
  catch(error){
    console.log(error);
    res.status(500).json({error: "data not available "});
  }

})

// modules.export = router;
export default router;