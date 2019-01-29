const passport = require("passport"),
  FacebookTokenStrategy = require("passport-facebook-token").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");
