const express = require("express");
const  {addImage,findImage,deleteImage} = require("@controllers/images.controllers");
const { imageValidate, validation } = require("@middleware/validator");
const imageRouter = express.Router();

//images
imageRouter.post("/upload",addImage,imageValidate,validation); 
imageRouter.get("/get",findImage);
imageRouter.delete("/delete/:id",deleteImage);

 module.exports = imageRouter;



