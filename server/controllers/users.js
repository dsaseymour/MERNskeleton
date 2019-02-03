const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");
const { validationResult } = require("express-validator/check");
const isEmpty = require("is-empty");

//
signToken = userJWTPayload => {
  return jwt.sign(
    userJWTPayload,
    process.env.JWT_SECRET,
    { expiresIn: 3600 },
    (err, token) => {
      if (err) {
        console.log(err);
      }
      res.json({
        success: true,
        token: "Bearer " + token
      });
    }
  );
};

//express validator error formatter
const errorFormatter = ({ location, msg, param }) => {
  return `${location}[${param}]: ${msg}`;
};

module.exports = {
  getCurrentUser: async (req, res, next) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  },
  registerUser: async (req, res, next) => {
    const errors = {};
    //validation error reporting
    const result = validationResult(req).formatWith(errorFormatter);
    if (!result.isEmpty()) {
      return res.status(422).json({
        err: result.array()
      });
    }
    //does the user email already exist
    const foundUser = await User.findOne({ email: req.body.email });
    if (foundUser) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    }
    //user email does not already exist, create user
    const newUser = new User({
      method: "local",
      local: {
        email: req.body.email,
        passwordHash: req.body.password
      },
      displayName: req.body.name
    });
    //generate password hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) {
          throw err;
        }
        newUser.local.passwordHash = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });

    //user has been created
  },
  localLogin: async (req, res, next) => {
    const errors = {};
    const result = validationResult(req).formatWith(errorFormatter);
    if (!result.isEmpty()) {
      return res.status(422).json({
        err: result.array()
      });
    }

    const email = req.body.email;
    const plaintextpassword = req.body.password;
    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    const passwordMatch = await bcrypt.compare(
      plaintextpassword,
      foundUser.local.passwordHash
    );

    if (passwordMatch) {
      const token = signToken(req.user);
      res.status(200).json(token);
    } else {
      errors.password = "Password incorrect";
      return res.status(400).json(errors);
    }
  },
  facebookAuth: async (req, res, next) => {
    const token = signToken(req.user.id);
    res.status(200).json({
      token
    });
  },
  googleAuth: async (req, res, next) => {
    const token = signToken(req.user.id);
    res.status(200).json({
      token
    });
  },
  deleteUser: async (req, res, next) => {
    await Profile.findOneAndRemove({ user: req.user.id });
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ success: true });
  }
};
