const express = require("express");
const userRouter = express.Router();
const { login, register,current,updateUser,getUsers,deleteOneUser} = require( "../controllers/user.controller");
const {loginValidate,registerValidate,validation} = require ("@middleware/validator");
const isAuth = require ("@middleware/passport");

//Register
userRouter.post("/register",registerValidate(),validation,register); 
  
 // Login 
 userRouter.post("/login",loginValidate(),validation,login);
  
//get current user
 userRouter.get("/current", isAuth (),current);

//update user
 userRouter.put("/:id", updateUser);

 //getallusers
userRouter.get("/",getUsers);

//delete One User
userRouter.delete('/:id',deleteOneUser);

 module.exports = userRouter;

 







