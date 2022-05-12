// const express = require("express");
// const userRouter = express.Router();
// const User = require ("../models/user")
// const jwt  = require('jsonwebtoken');
// APP_SECRET = "APP_SECRET"

// userRouter.post("/login", async (req, res) => {
//     try {
//       const connectetuser = await User.findOne({"email":req.body.email});
//     if (connectetuser !== null) {
//       //const validpwd = await bcrypt.compare(req.body.password, foundUser.password);

//       if (req.body.pwd == connectetuser.pwd){
//         const token = jwt.sign({  
//           iss: 'xxxx',
//           sub: connectetuser._id,
//           userName: connectetuser.email,
//           role: connectetuser.role,
//           iat: new Date().getTime(),
//           exp: new Date().setDate(new Date().getDate() + 1)
//           }, APP_SECRET);
//           res.send(token)
//       }
//       else {
//           res.status(400).json({ err: 'WRONG PWD' });
//       }  
//     } else {
//       res.send ("user don´t existS")
//     }
    
//     } catch (error) {
//       console.log(error);
//     }
//   });
  
//   module.exports = userRouter;
