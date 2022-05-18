const express = require("express");
const { addVoiture, getAllVoiture,deleteVoiture,editVoiture} = require( "@controllers/voiture-controller");
const router = express.Router();

//add Voiture
router.post("/", addVoiture);

//get all voiture
router.get("/", getAllVoiture);

// delete voiture
router.delete("/:id", deleteVoiture);

// update voiture
router.put("/:id", editVoiture);

module.exports = router;