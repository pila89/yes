const express = require("express");
const  {addImage} = require("@controllers/images.controllers");
const imageRouter = express.Router();

//images
imageRouter.post("/upload",addImage); 
// imageRouter.get("/upload",findImage);
// imageRouter.delete("/upload/:id",deleteImage);

 module.exports = imageRouter;



