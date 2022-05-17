const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema ({
  fullName: { type: String, required: true },
  address:  {
    type: String,
    max: 20
  },
  phone: { type: Number, required: false },
  email: {
    type: String,
    required: true,
    max: 12,
    
    unique: true,  // ensure unique email
  
  },
  pwd: { type:String, required: true },
  image:{ type: String, required: false },
  role:{ type: String, required: false },
})
module.exports=mongoose.model("user",userSchema)
