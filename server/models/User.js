const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const userSchema = Schema({
  passwordHash: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
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
const User = (module.exports = mongoose.model("user", userSchema));
