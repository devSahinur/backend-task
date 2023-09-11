const express = require("express");
const router = express.Router();

const { bookCar, getRent, getRents } = require("../controller/rent");

router.post("/book/:id", bookCar);
router.get("/rents", getRents);
router.get("rent/:id", getRent);

module.exports = router;
