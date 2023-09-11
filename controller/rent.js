const Car = require("../models/car");
const Rent = require("../models/rent");

exports.bookCar = async (req, res) => {
  const { id } = req.params;
  const car = await Car.findById(id);
  const rent = new Rent(req.body);
  rent.car = car;
  await rent.save();
  car.bookCount = car.bookCount + 1;
  await car.save();
  res.status(201).json(rent);
};

// show all rents
exports.getRents = async (req, res) => {
  const rents = await Rent.find({});
  res.status(200).json(rents);
};

// show a rent
exports.getRent = async (req, res) => {
  const { id } = req.params;
  const rent = await Rent.findById(id);
  res.status(200).json(rent);
};

