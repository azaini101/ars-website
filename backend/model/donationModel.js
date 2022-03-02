const mongoose = require("mongoose")

const donationsSchema = {
    "firstName": String,
    "lastName": String,
    "email": String,
    "phone": String,
    "emergencyfirstName": String,
    "emergencylastName": String,
    "emergencyphone": String,
    "service": String,
    "description": String
}

const Donation = mongoose.model("Donation", donationsSchema);

module.exports = Donation;