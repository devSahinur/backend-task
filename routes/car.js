const express = require("express");
const router = express.Router();

const { createCar, getCars, getCar} = require("../controller/car");

router.post("/car", createCar);
router.get("/cars", getCars);
router.get("/car/:id", getCar);


module.exports = router;

