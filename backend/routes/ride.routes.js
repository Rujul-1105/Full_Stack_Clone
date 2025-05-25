const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const RideController = require("../controllers/ride.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/create",
    authMiddleware.authUser,
    body('pickup').isString().isLength({min: 3}).withMessage("Pickup address must be a valid string"),    
    body('destination').isString().isLength({min: 3}).withMessage("Destination address must be a valid string"),
    body('vehicleType').isString().isIn(['auto', 'car', 'moto']).withMessage("Vehicle type must be one of the following: auto, car, moto"),
    RideController.createRide
);

module.exports = router;
