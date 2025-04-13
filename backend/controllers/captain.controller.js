const CaptainModel = require("../models/Captain.model");
const CaptainService = require("../services/captain.service");
const jwt = require("jsonwebtoken");
const BlacklistToken = require("../models/blacklistToken.model");

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


module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    
    const captain = await CaptainModel.findOne({ email }).select("+password");

    if (!captain) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await captain.comparePassword(password);

    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: captain._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    res.cookie("token", token);
    res.status(200).json({ token, captain });
    
    
    
    
}


module.exports.getCaptainProfile = async (req, res, next) => {
    const captain = req.captain;
    res.status(200).json(captain);
}


module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies?.token || req.headers?.authorization?.split(" ")[1];
    await BlacklistToken.create({ token });
    res.clearCookie("token");

    res.status(200).json({ message: "Logged out successfully" });

}