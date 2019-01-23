const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  passwordHash: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  tokenSeed: {
    type: String,
    required: true,
    unique: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});
const User = mongoose.model("user", userSchema);
module.exports = User;
