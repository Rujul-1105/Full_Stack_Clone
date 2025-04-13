const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const UserController = require("../controllers/user.controller");
const { authUser } = require("../middlewares/auth.middleware");


router.post("/register",
  [
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password"),
  ],
  UserController.registerUser
);

router.post("/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
  ],
  UserController.loginUser
);


router.get("/profile", authUser, UserController.getUser);

router.get("/logout", authUser, UserController.logoutUser);


module.exports = router;
