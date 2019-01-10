require("dotenv").config();

const express = require("express");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const mongoose = require("mongoose");
const db = process.env.MONGODB_URI;

const passport = require("passport");

const path = require("path");

const app = require("./express");

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === "production") {
}

const port = process.env.PORT || 5000;

export const start = () => {
  app.listen(port, err => {
    if (err) {
      console.log(err);
    }
    console.log(`Listening on port: ${port}`);
  });
};
