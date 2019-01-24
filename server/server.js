require("dotenv").config();
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");

if (process.env.NODE_ENV === "test") {
} else if (process.env.NODE_ENV === "dev") {
  const db = process.env.MONGODB_URI;
  mongoose
    .connect(db)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));
}

if (process.env.NODE_ENV === "production") {
}
