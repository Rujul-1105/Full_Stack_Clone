const rideModel = require('../models/ride.model');
const mapService = require('./maps.service');
const crypto = require('crypto');

async function calculateFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error("Pickup and destination addresses are required");
    }
    const DistanceTime = await mapService.getDistanceTime(pickup, destination)
    console.log(DistanceTime);
    const baseFare = {
        auto: 30,
        car: 75,
        moto: 20
    }
    const perKm = {
        auto: 10,
        car: 15,
        moto: 5
    }
    const perMinute = {
        auto: 2,
        car: 3,
        moto: 1
    } 

    const fare = {
        auto: baseFare.auto + ((DistanceTime.distance.value / 1000) * perKm.auto) + ((DistanceTime.duration.value / 60) * perMinute.auto),
        car: baseFare.car + ((DistanceTime.distance.value / 1000) * perKm.car) + ((DistanceTime.duration.value / 60) * perMinute.car),
        moto: baseFare.moto + ((DistanceTime.distance.value / 1000) * perKm.moto )+ ((DistanceTime.duration.value / 60) * perMinute.moto)
    }
    console.log(fare)
    return fare;
}


function getOTP(num){
    const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
    return otp;    
}


module.exports.createRide = async({user, pickup, destination, vehicleType})=>{
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error("User, pickup, destination and vehicle type are required");
    }
    const fare = await calculateFare(pickup, destination);
    const ride = new rideModel({
        user,
        pickup,
        destination,
        fare: fare[vehicleType],
        otp: getOTP(6),
        vehicleType
    });

    return ride
}
