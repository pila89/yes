const contact=require("@models/Contact");

//post one contact

exports.postContact= async(req, res) => {
  try{  let newContact = new contact({...req.body});
  
let result=await newContact.save()
res.send({result:result})
  }
catch(error){
res.send(error)
console.log(error)
}
};

//get all contacts
 
 exports.getAllContacts=async(req, res) => {
    try{
      let result=await contact.find()
      res.send({result:result, msg:"all contacts"})
    }
    catch(error){
      res.send("error")
      console.log(error)
    }
  };


//  //get one contact

  exports.getOneContact= async(req, res) => {
  try{
     let result=await contact.findOne({_id:req.params.id})
    res.send({result:result, msg:"contact found"})
   }
   catch(error){
    res.send("error")
    console.log(error)
  }
 };

 //delete one contact

  exports.deleteOneContact = async(req, res) => {
  try{
     let result=await contact.deleteOne({_id:req.params.id})
     res.send({result:result, msg:"contact deleted"})
  }
   catch(error){
    res.send("error")
   }
 };

//update one contact

 exports.updateContact = async(req, res) => {
  try{
     let result=await contact.updateOne({_id:req.params.id},{$set:{...req.body}})
    res.send({result:result, msg:"contact updated"})
   }
   catch(error){
     res.send("error")
    
   }
 };