const express = require("express");
const router = express.Router();

const CarController = require("../controllers/carController");

router.get("/cars", CarController.getAllCars);
router.get("/car/:id", CarController.getCarById);
router.post("/car", CarController.insertCarData);
router.put("/car/:id", CarController.updateCarRecord);
router.delete("/car/:id", CarController.deleteCarById);

module.exports = router;
