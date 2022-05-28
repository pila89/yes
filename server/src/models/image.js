const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema ({
  title: { type: String },
  image:  {type: String},
  path : {type: String}},{
  timestamps: true}
  
  
  
);
module.exports=mongoose.model("image",imageSchema)