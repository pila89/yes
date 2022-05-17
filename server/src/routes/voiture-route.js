const express = require("express");
const { addVoiture, getAllVoiture,getVoiture,deleteVoiture,editVoiture} = require("@controllers/voiture-controller");
const router = express.Router();


// @Create => add a contact to the database
// Data req.body

router.post("/", addVoiture);

// @Read => Get all The contact
// Data

router.get("/", getAllVoiture);

// @Read => Get One contact By id
// Data id => req.params

//router.get("/:id", getVoiture);

// @DELETE => delete one contact
// Data id => req.params

router.delete("/:id", deleteVoiture);

// @Update => update one contact
// Data id => req.params+  body=>modification

router.put("/:id", editVoiture);

module.exports = router;