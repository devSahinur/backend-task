const Car = require("../models/car");
const Rent = require("../models/rent");

exports.createCar = async (req, res) => {
  const car = new Car(req.body);
  await car.save();
  res.status(201).json(car);
};

exports.getCars = async (req, res) => {
  const cars = await Car.find({});
  res.status(200).json(cars);
};

exports.getCar = async (req, res) => {
  const { id } = req.params;
  const car = await Car.findById(id);
  res.status(200).json(car);
};
