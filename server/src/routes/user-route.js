const express = require("express");
const userRouter = express.Router();
const { login, register,current} = require( "@controllers/user-controller");
const {loginValidate,registerValidate,validation} = require ("@middleware/validator");
const isAuth = require ("@middleware/passport");

//Register
userRouter.post("/register",registerValidate(),validation,register); 
  
 // Login 
 userRouter.post("/login",loginValidate(),validation,login);
  
//get current user
 userRouter.get("/current", isAuth (),current);

 module.exports = userRouter;

// userRouter.put("/update/:id", async (req, res) => {
//   try {
//     let result = await User.findByIdAndUpdate(req.params.id,req.body );

//     res.send("user updqted" );
//   } catch (error) {
//     console.log(error);
//   }
// });

// userRouter.get("/get/:email", async (req, res) => {
//   try {
//     let result = await User.findOne({'email': req.params.email});
//     res.send( result );
//   } catch (error) {
//     console.log(error);
//   }
// });



// try {
//   let result = await User.findByIdAndRemove({ _id: req.params.id });

//    res.send( "user removed");
// } catch (error) {
//   console.log(error);
//  }


