const mongoose = require("mongoose");

const workshopSchema = {
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  accompanying: Number,
  language: String,
  notes: String,
  agreement: Boolean
};

const Workshoppers = mongoose.model("Workshoppers", workshopSchema);

module.exports = Workshoppers;
