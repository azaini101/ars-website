const mongoose = require("mongoose")

const donationsSchema = {
    "firstName": String,
    "lastName": String,
}

const Donation = mongoose.model("Donation", donationsSchema);

module.exports = Donation;