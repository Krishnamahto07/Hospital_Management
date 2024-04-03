const mongoose = require("mongoose")
const validator = require("validator");

const messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First name must contain at least 3 characters"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"First name must contain at least 3 characters"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please Provide a valid Email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[11,"Phone Number must contain exact 11 digit !"],
        maxLength:[11,"Phone Number must contain exact 11 digit !"]
    },
    message:{
        type:String,
        required:true,
        minLength:[10,"Message must contain at least 10 characters ."]
    }
})

module.exports = mongoose.model("Message",messageSchema);