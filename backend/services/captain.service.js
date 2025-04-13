const CaptainModel = require("../models/Captain.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const BlacklistToken = require("../models/blacklistToken.model");

module.exports.CreateCaptain = async (data) => {
  const { fullname, email, password, status, vehicle } = data;

  // Validate all required fields
  if (
    !fullname.firstname || !fullname.lastname ||
    !email || !password || !status || !vehicle
  ) {
    console.log(fullname.firstname, fullname.lastname, email, password, status, vehicle);
    throw new Error("All fields are required");
  }

  const existingCaptain = await CaptainModel.findOne({ email });
  if (existingCaptain) {
    throw new Error("Captain already exists");
  }

  // Create captain with properly structured data
  const captain = await CaptainModel.create({
    fullname: {
      firstname: fullname.firstname,
      lastname: fullname.lastname,
    },
    email,
    password,
    status,
    vehicle: {
      color: vehicle.color,
      number: vehicle.number,
      capacity: vehicle.capacity,
      type: vehicle.type
    },
  });

  return captain;
};
