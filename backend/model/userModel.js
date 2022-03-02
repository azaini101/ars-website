const mongoose = require("mongoose");

const usersSchema = {
  username: String,
  password: String,
};

const User = mongoose.model("User", usersSchema);

module.exports = User;
