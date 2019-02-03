require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const app = express();

const db = process.env.MONGODB_URI;
const userRoutes = require("./routes/api/users");
const profileRoutes = require("./routes/api/profile");
const authRoutes = require("./routes/auth/auth-routes");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

/* Express configuration begins*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());
require("./config/passport_facebookstrategy")(passport);
require("./config/passport_googlestrategy")(passport);
require("./config/passport_jwtstrategy")(passport);

app.use("/api/users", userRoutes);
app.use("/api/profile", profileRoutes);
app.use("/auth", authRoutes);
/* Express configuration ends*/

module.exports = app;
