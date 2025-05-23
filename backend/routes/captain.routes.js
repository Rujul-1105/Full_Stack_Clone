const express = require("express");
const router = express.Router();
const captainController = require("../controllers/captain.controller");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth.middleware");

router.post(
  "/register",
  [
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("password"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 characters long"),
    body("vehicle.number")
      .isLength({ min: 3 })
      .withMessage("Number must be at least 3 characters long"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Capacity must be at least 1"),
    body("vehicle.type")
      .isIn(["car", "bike", "auto"])
      .withMessage("Invalid vehicle type"),
  ],
  captainController.registerCaptain
);

router.post("/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("password"),
  ],
  captainController.loginCaptain
);


router.get("/profile", authMiddleware.authCaptain, captainController.getCaptainProfile);

router.post("/logout", authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;
