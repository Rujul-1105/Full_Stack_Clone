const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    captain:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Captain',
    },
    pickup: {
        type: String,
        required: true,
        minlength: 3
    },
    destination: {
        type: String,
        required: true,
        minlength: 3
    },
    fare:{
        type: Number,
        required: true,
    },
    status:{
        type: String,
        enum: ['pending', 'accepted', "Ongoing", 'completed', 'cancelled'],
        default: 'pending'
    },
    duration:{
        type: Number, // Duration in seconds
    },
    distance:{
        type: Number, // Distance in meters
    },
    paymentID:{
        type: String,
    },
    orderID:{
        type: String,
    },
    signature:{
        type: String,
    },   
    otp:{
        type: String,
        select: false,
        required: true
    }
})


const Ride = mongoose.model("Ride", RideSchema);

module.exports = Ride;