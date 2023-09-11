const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    name: String,
    bookCount: {
      type: Number,
      default: 0,
    },
    rent: [{ type: mongoose.Types.ObjectId, ref: "Rent" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", carSchema);
