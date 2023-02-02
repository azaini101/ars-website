require("dotenv").config();
const express = require("express");
const cors = require("cors");
const argon2 = require("argon2");
const mongoose = require("mongoose");
const Models = require("./model/donationModel");
const Workshop = require("./model/workshopModel");
const User = require("./model/userModel");

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("MongoDB db connection established");
});

app.post("/submitForm/:version", async (req, res) => {
  console.log("/submitForm");
  const version = req.params.version;
  console.log(version);
  let donation;
  let obj;
  if (version === "signup") {
    donation = new Models.Donation(req.body);
    obj = Models.Donation;
  } else if (version === "register") {
    donation = new Models.Register(req.body);
    obj = Models.Register;
  }
  await obj.findOneAndUpdate(
    {
      firstName: donation.firstName,
      lastName: donation.lastName,
      email: donation.email,
      phone: donation.phone,
      emergencyFirstName: donation.emergencyFirstName,
      emergencyLastName: donation.emergencyLastName,
      emergencyPhone: donation.emergencyPhone,
      services: donation.services,
      times: donation.times,
      languages: donation.languages,
      notes: donation.notes,
      idaraMember: donation.idaraMember,
      idaraVisits: donation.idaraVisits,
      faith: donation.faith,
      agreement: donation.agreement,
    },
    {
      firstName: donation.firstName,
      lastName: donation.lastName,
      email: donation.email,
      phone: donation.phone,
      emergencyFirstName: donation.emergencyFirstName,
      emergencyLastName: donation.emergencyLastName,
      emergencyPhone: donation.emergencyPhone,
      services: donation.services,
      times: donation.times,
      languages: donation.languages,
      notes: donation.notes,
      idaraMember: donation.idaraMember,
      idaraVisits: donation.idaraVisits,
      faith: donation.faith,
      agreement: donation.agreement,
    },
    {
      upsert: true,
    }
  );
  res.sendStatus(200);
});

app.post("/submitWorkshopForm", async (req, res) => {
  console.log("/submitWorkshopForm");
  const version = req.params.version;
  console.log(version);
  let donation = new Workshop(req.body);
  let obj = Workshop;
  await obj.findOneAndUpdate(
    {
      firstName: donation.firstName,
      lastName: donation.lastName,
      email: donation.email,
      phone: donation.phone,
    },
    {
      firstName: donation.firstName,
      lastName: donation.lastName,
      email: donation.email,
      phone: donation.phone,
      accompanying: donation.accompanying,
      language: donation.language,
      notes: donation.notes,
      agreement: donation.agreement
    },
    {
      upsert: true,
    }
  );
  res.sendStatus(200);
});

app.get("/donations", async (req, res) => {
  // console.log("/donations");

  const base64Credentials = req.headers.authorization.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("utf8");
  const [username, password] = credentials.split(":");

  const user = await User.findOne({ username: username }).exec();

  if (user) {
    const isPasswordValid = await argon2.verify(user.password, password);
    if (isPasswordValid) {
      const donations = await Models.Donation.find({});
      const registers = await Models.Register.find({});
      return res.send({ donations, registers });
    }
  }

  res.send(400);
});

app.get("/workshoppers", async (req, res) => {
  // console.log("/workshoppers");

  const base64Credentials = req.headers.authorization.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("utf8");
  const [username, password] = credentials.split(":");

  const user = await User.findOne({ username: username }).exec();

  if (user) {
    const isPasswordValid = await argon2.verify(user.password, password);
    if (isPasswordValid) {
      const workshoppers = await Workshop.find({});
      return res.send({ workshoppers });
    }
  }

  res.send(400);
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
