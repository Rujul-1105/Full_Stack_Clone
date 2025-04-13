const CaptainModel = require("../models/Captain.model");
const CaptainService = require("../services/captain.service");
const jwt = require("jsonwebtoken");

const { validationResult } = require("express-validator");


module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle, status } = req.body;

    const hashedPassword = await CaptainModel.hashPassword(password);

    const captain = await CaptainService.CreateCaptain({
        fullname,
        email,
        password: hashedPassword,
        vehicle,
        status, 
    }); 



    const token = jwt.sign({ id: captain._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    

    res.status(201).json(captain);
}
