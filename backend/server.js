require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Donation = require("./model/donationModel");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("MongoDB db connection established");
});

app.post("/submitForm", (req, res) => {
  console.log("/submitForm");
  var donation = new Donation(req.body);
  donation.save().then((data) => {
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
