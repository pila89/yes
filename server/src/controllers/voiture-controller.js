const Voiture = require ("../models/voiture")

exports.addVoiture=async (req, res) => {
  try {
    const newVOiture = new Voiture(req.body);
    let result = await newVOiture.save();
    res.send( result );
  } catch (error) {
    console.log(error);
  }
};

exports.getAllVoiture= async (req, res) => {
    try {
      let result = await Voiture.find();
      res.send( result );
    } catch (error) {
      console.log(error);
    }
  };
  exports.deleteVoiture= async (req, res) => {
    try {
        
      let result = await Voiture.findByIdAndRemove({ _id: req.params.id });
  
      res.send( "voiture removed");
    } catch (error) {
      console.log(error);
    }
  };
 exports.editVoiture= async (req, res) => {
    try {
      let result = await Voiture.findByIdAndUpdate(req.params.id,req.body );
  
      res.send("voiture updated" );
    } catch (error) {
      console.log(error);
    }
  };
 // module.exports = addVoiture,getAllVoiture,getVoiture,editVoiture;
  



