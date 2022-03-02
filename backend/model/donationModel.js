const mongoose = require("mongoose");

const donationsSchema = {
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  emergencyFirstName: String,
  emergencyLastName: String,
  emergencyPhone: String,
  service: String,
  description: String,
};

const Donation = mongoose.model("Donation", donationsSchema);

module.exports = Donation;
