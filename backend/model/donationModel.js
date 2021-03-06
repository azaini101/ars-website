const mongoose = require("mongoose");

const donationsSchema = {
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  emergencyFirstName: String,
  emergencyLastName: String,
  emergencyPhone: String,
  services: String,
  times: String,
  languages: String,
  notes: String,
  idaraMember: String,
  idaraVisits: String,
  faith: String,
  agreement: Boolean
};

const Donation = mongoose.model("Donation", donationsSchema);
const Register = mongoose.model("Register", donationsSchema);

module.exports = {Donation, Register};
