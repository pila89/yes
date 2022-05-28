const bcrypt = require("bcrypt");
const User = require("@models/user");
const jwt = require("jsonwebtoken");


//register
exports.register = async (req, res) => {
  try {
    const { email } = req.body;
    const newUser = new User(req.body);
    //Chek email
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "user exist" });
    }
    //hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(req.body.pwd, genSalt);
    console.log(hashedPassword);
    newUser.pwd = hashedPassword;
    console.log(newUser);
    // // generate a token
    // const payload = {
    //   _id:newUser_id,
    //   fullName:searchedUser.fullName

    // }
    // const token = await jwt.sign(payload,process.env.SecretOrkey,{expiresIn : 3600,});

    //save the user
    await newUser.save();
    res.status(200).send({ newUser, msg: "user is saved" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

//login
exports.login = async (req, res) => {
  try {
    const { email, pwd } = req.body;
    //find if the user exist
    const searchedUser = await User.findOne({ email });
    console.log(searchedUser);
    //if the email ot exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad condentaila" });
    }
    //password are equals

    const match = await bcrypt.compare(pwd, searchedUser.pwd);
    console.log(match);
    //send the user
    if (!match) {
      return res.status(400).send({ msg: "bad pila" });
    }
    //cree un token
    const payload = {
      _id: searchedUser._id,
      fullName: searchedUser.fullName,
    };
    console.log(payload);
    const token = await jwt.sign(payload, process.env.SecretOrkey, {
      expiresIn: 8000,
    });

    console.log(token);
    //send the user
    res
      .status(200)
      .send({ user: searchedUser, msg: " sucess", token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).send({ msg: "problem" });
  }
};

//get current user
exports.current = async (req, res) => {
  res.status(200).send({ user: req.user });
};

//update
exports.updateUser = async (req, res) => {
  try {
    let result = await User.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ result: result, msg: "user updated" });
  } catch (error) {
    res.send("error");
  }
};

//get all users
exports.getUsers = async (req, res) => {
  try {
    let result = await User.find();
    res.send({ result: result, msg: "all users" });
  } catch (error) {
    res.send("error");
  }
};

//delete one user
exports.deleteOneUser = async (req, res) => {
  try {
    let result = await User.findByIdAndRemove({ _id: req.params.id });

    res.send("user removed");
  } catch (error) {
    console.log(error);
  }
};
