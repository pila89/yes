const { validationResult, check } = require("express-validator");

exports.registerValidate = () => [
  check("fullName", "fullName is required").notEmpty(),
  check("email", "should be email").isEmail(),
  check("pwd", "pwd is required").notEmpty(),
  check("pwd", "enter a valid pwd").isLength({ min: 6,max:20 }),
];
exports.loginValidate = () => [
  check("email", "should be email").isEmail(),
  check("pwd", "enter a valid pwd").isLength({ min: 6 }),
];
exports.imageValidate = () => [
  check("title", "should be a title").notEmpty(),
  
];


exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array().map(el=>({msg:el.msg})) });
  }
  next();
};