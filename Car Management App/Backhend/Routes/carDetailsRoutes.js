const express = require("express");
const { getCar, createCar, updateCar,deleteCar } = require("../controller/carControllers");
const router = express.Router();
router.get("/", getCar);
router.post("/", createCar);
router.put("/:id",updateCar);
router.delete("/:id",deleteCar);

module.exports = router