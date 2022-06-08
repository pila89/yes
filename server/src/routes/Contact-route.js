const express=require('express')
const router=express.Router();
const { postContact, getAllContacts,getOneContact,updateContact,deleteOneContact} = require( "@controllers/Contact-controller");

require('dotenv').config();
//add avis
router.post('/',postContact)

//get all avis
router.get("/",getAllContacts)

//get one avis
router.get('/:id',getOneContact)
//update avis
router.put('/:id',updateContact)

//delete avis

router.delete('/:id',deleteOneContact)

module.exports = router;