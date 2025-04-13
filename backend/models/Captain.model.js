const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const captainSchema = new mongoose.Schema({
    fullname: { 
        firstname: {
            type: String,
            required: true,
            minlength: [3,"First name must be at least 3 characters long"],
        },
        lastname: {
            type: String,
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],

    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
        select: false,
    },
    status: {
        type: String,
        enum: ["online", "offline"],
        default: "offline",
    },
    vehicle: {
        color: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
            minlength: [3, "Vehicle number must be at least 3 characters long"],
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity must be at least 1"],
        },
        type: {
            type: String,
            enum: ["car", "bike", "auto"],
            required: true,
        },
    },
    location: {
        latitude: {
            type: Number
        },
        longitude: {
            type: Number
            
        }
    }
});

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    return token;
}

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}




const CaptainModel = mongoose.model("Captain", captainSchema);

module.exports = CaptainModel;