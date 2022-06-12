const express=require('express');
const router=express.Router();
const { postContact, getAllContacts,getOneContact,updateContact,deleteOneContact} = require( "../controllers/contact.controller");

//add Contact
router.post("/",postContact);

//get all Contact
router.get("/",getAllContacts);

// //get one Contact
router.get("/:id",getOneContact);

 //update Contact
 router.put("/:id",updateContact);

 //delete Contact
 router.delete('/:id',deleteOneContact);

module.exports = router;