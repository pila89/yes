const express = require("express");
const userRouter = express.Router();
const User = require ("../models/user")


userRouter.post("/add", async (req, res) => {
  try {

   const newUser = new User(req.body);
    //user.pwd = await this.HashPwd(req.body.password)
    let result = await newUser.save();
    res.send( result );
  } catch (error) {
    console.log(error);
  }
});

userRouter.get("/get", async (req, res) => {
  try {
    let result = await User.find();
    res.send( result );
  } catch (error) {
    console.log(error);
  }
});

userRouter.delete("/delete/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndRemove({ _id: req.params.id });

    res.send( "user removed");
  } catch (error) {
    console.log(error);
  }
});

userRouter.put("/update/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate(req.params.id,req.body );

    res.send("user updqted" );
  } catch (error) {
    console.log(error);
  }
});

userRouter.get("/get/:email", async (req, res) => {
  try {
    let result = await User.findOne({'email': req.params.email});
    res.send( result );
  } catch (error) {
    console.log(error);
  }
});



HashPwd  = async(password) => {
  const salt = await bcrypt.genSalt(10);
  const pwdHashed = await bcrypt.hash(password, salt);
  return pwdHashed;
};





module.exports = userRouter;