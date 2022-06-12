const Car = require ("@models/car")

exports.addCar=async (req, res) => {
  try {
    const newCar = new Car(req.body);
    let result = await newCar.save();
    res.send( result );
  } catch (error) {
    console.log(error);
  }
};

exports.getAllCars= async (req, res) => {
    try {
      let result = await Car.find();
      res.send( result );
    } catch (error) {
      console.log(error);
    }
  };

exports.deleteCar= async (req, res) => {
    try {
        
      let result = await Car.findByIdAndRemove({ _id: req.params.id });
  
      res.send( "Car removed");
    } catch (error) {
      console.log(error);
    }
  };
  
exports.editCar= async (req, res) => {
    try {
      let result = await Car.findByIdAndUpdate(req.params.id,req.body );
  
      res.send("Car updated" );
    } catch (error) {
      console.log(error);
    }
  };

  



