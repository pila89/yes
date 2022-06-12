const express = require("express");
const { addCar, getAllCars,deleteCar,editCar} = require( "@controllers/car.controller");
const router = express.Router();

//add car
router.post("/", addCar);

//get all cars
router.get("/", getAllCars);

// delete car
router.delete("/:id", deleteCar);

// update car
router.put("/:id", editCar);

module.exports = router;