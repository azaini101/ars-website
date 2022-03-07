require("dotenv").config();
const express = require("express");
const cors = require("cors");
const argon2 = require("argon2");
const mongoose = require("mongoose");
const Donation = require("./model/donationModel");
const User = require("./model/userModel");

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
  const donation = new Donation(req.body);
  donation.save().then((data) => {
    res.send(data);
  });
});

app.get("/donations", async (req, res) => {
  console.log("/donations");

  const base64Credentials = req.headers.authorization.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("utf8");
  const [username, password] = credentials.split(":");

  const user = await User.findOne({ username: username }).exec();

  if (user) {
    const isPasswordValid = await argon2.verify(user.password, password);
    if (isPasswordValid) {
      const donations = await Donation.find({});
      return res.send(JSON.stringify(donations));
    }
  }

  res.send(400);
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});