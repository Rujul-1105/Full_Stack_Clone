const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const UserSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minLength: [3, "First name must be at least 3 characters long"],
        },
        lastname:{
            type: String
        }
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        select: false
    },
    socketId:{
        type: String,
    }
    
})


UserSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({id: this._id}, process.env.JWT_SECRET, {expiresIn: "1d"}); 
    return token;
}

UserSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

UserSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const User = mongoose.model("User", UserSchema);

module.exports = User;