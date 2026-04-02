import express from "express";
const router = express.Router();
import MenuItem from "../models/MenuItem.js";
router.post("/MenuItem", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new MenuItem(data);
    const response = await newMenuItem.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
router.get('/', async(req , res)=>{
  try{
    const data = await MenuItem.find();
    console.log("data fetched successfully");
    res.status(200).json(data);

  }
  catch(error){
    console.log(error);
    res.status(500).json({ error: "internal server error" });

  }

});

router.get('/:tasteType', async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if(tasteType=='sour'||tasteType=='spicy' || tasteType == 'salty' || tasteType=='sweet'){
      const response = await MenuItem.find({ taste: tasteType });
      console.log("response fetched");
      res.status(200).json(response);

    }else{
      res.status(404).json({ error: "Invalid work type " });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.put('/:id' , async(req , res)=>{
  try{
  const menuId = req.params.id;
  const updateMenuData = req.body;

  const response = await  MenuItem.findByIdAndUpdate(menuId, updateMenuData , {
    new : true ,
    runValidators : true,

  })
  if (!response) {
    return res.status(404).json({ error: "person not found " });
  }
  console.log("data updated");
  res.status(200).json(response);

  } 
  catch(error){
    console.log(" data updated");
    res.status(500).json({ error: "internal server error" });

  }
})
router.delete('/:id' , async(req , res)=>{
  try{
    const menuId = req.params.id;

    const response = await MenuItem.findByIdAndDelete(menuId);
    if (!response) {
      return res.status(404).json({ error: "Menu  not found " });
    }
    console.log("data deleted");
    res.status(200).json({ message: "Menu deleted succesfully" });
  }
  catch(error){
    console.log(error);
    res.status(500).json({ error: "internal server error"});
  }
})
export default router;
