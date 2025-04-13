const UserModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const BlacklistToken = require("../models/blacklistToken.model"); 

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  const hashedPassword = await UserModel.hashPassword(password);

  const user = await userService.createUser(
    fullname.firstname,
    fullname.lastname,
    email,
    hashedPassword
  );

  const token = user.generateAuthToken();
  res.status(201).json({ user, token });
};

module.exports.loginUser = async (req, res, next) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await UserModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = user.generateAuthToken();
  res.cookie("token", token )
  res.status(200).json({ token, user });
};


module.exports.getUser = async (req, res, next) => {
  const users = await UserModel.find();
  res.status(200).json({ users });
};


module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");

  const token = req.headers?.authorization?.split(" ")[1] || req.cookies.token;
  await BlacklistToken.create({ token });
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};
