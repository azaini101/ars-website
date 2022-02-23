require('dotenv').config()
const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();
const Donation = require("./model/donationModel")

app.use(cors());
app.use(express.json());
mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.sv3hk.mongodb.net/${process.env.DBNAME}`);
mongoose.connection.on('connected', () => {
  console.log("connected");
});

app.post('/submitForm', function (req, res) {
  var donation = new Donation(req.body);
  donation.save()
    .then(data => {
      console.log("Data has been saved.")
      res.send("Data saved to db.");
    });
  console.log(req.body)
})

app.listen(5000, function () {
   console.log("Example app listening at http://localhost:5000")
})