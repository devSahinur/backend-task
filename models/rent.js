// give me rent model in car model include end_date start_date price in model

const mongoose = require("mongoose");

const rentSchema = new mongoose.Schema(
  {
    rentName: String,
    price: String,
    day: String,
    car: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Rent", rentSchema);
