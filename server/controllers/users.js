const express = require("express");
const router = require("express-promise-router")();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");
const { check, validationResult } = require("express-validator/check");
const isEmpty = require("is-empty");

signToken = userJWTPayload => {
  return JWT.sign(
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

module.exports = {
  getCurrentUser: async (req, res, next) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  },
  registerUser: async (req, res, next) => {
    const errors = validationResult(req);
    if (!isEmpty(errors)) {
      return res.status(422).json({
        errors: errors.array()
      });
    }
    const foundUser = await User.findOne({ email: req.body.email });
    if (foundUser) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    }
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save();
        res.json(newUser);
      });
    });
  },
  localLogin: async (req, res, next) => {
    const errors = validationResult(req);
    if (!isEmpty(errors)) {
      return res.status(422).json({
        errors: errors.array()
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
      foundUser.password
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
