const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const Profile = require("../models/Profile");
const User = require("../models/User");

module.exports = {
  getCurrentProfile: async (req, res, next) => {
    console.log(req);
    const foundMyProfile = await Profile.findOne({ user: req.user._id });
    if (!foundMyProfile) {
      errors.noprofile = "There is no profile for this user";
      return res.status(404).json(errors);
    }
    foundMyProfile.populate("user");
    res.json(foundMyProfile);
  },
  getProfileByHandle: async (req, res, next) => {
    const errors = {};
    const foundRequestedUser = await Profile.findOne({
      handle: req.params.handle
    });
    if (!foundRequestedUser) {
      errors.noprofile = "There is no profile for this user";
      res.status(404).json(errors);
    }
    foundRequestedUser.populate("user", [displayName]);
    res.json(profile);
  },
  editProfileBasic: async (req, res, next) => {
    const errors = {};
    //validation error reporting
    const result = validationResult(req).formatWith(errorFormatter);
    if (!result.isEmpty()) {
      return res.status(422).json({
        err: result.array()
      });
    }
    //does the user already have a profile or is this their first time creating one?
    //
    const foundProfile = await Profile.findOne({ user: req.body._id });
    if (foundProfile) {
      //user profile exists and we are updating it
    }
    //user profile does not already exist, create one
    const newProfile = new Profile({
      user: req.body._id,
      handle: req.body.handle,
      photo: req.body.photo,
      age: req.body.age,
      dateofbirth: req.body.dateofbirth,
      address: req.body.address,
      gender: req.body.gender,
      job: req.body.job
    });
    newProfile
      .save()
      .then(newProfile => res.json(newProfile))
      .catch(err => console.log(err));

    //Profile has been created
  },
  editProfileBio: async (req, res, next) => {
    const errors = {};
    //validation error reporting
    const result = validationResult(req).formatWith(errorFormatter);
    if (!result.isEmpty()) {
      return res.status(422).json({
        err: result.array()
      });
    }
    //does the user already have a profile or is this their first time creating one?
    //
    const foundProfile = await Profile.findOne({ user: req.body._id });
    if (foundProfile) {
      //user profile exists and we are updating it
    }
    //user profile does not already exist, create one
    const newProfile = new Profile({
      user: req.body._id,
      bio: req.body.bio,
      hobbies: req.body.hobbies
    });
    newProfile
      .save()
      .then(newProfile => res.json(newProfile))
      .catch(err => console.log(err));

    //Profile has been created
  },
  editProfileSocial: async (req, res, next) => {
    const errors = {};
    //validation error reporting
    const result = validationResult(req).formatWith(errorFormatter);
    if (!result.isEmpty()) {
      return res.status(422).json({
        err: result.array()
      });
    }
    //does the user already have a profile or is this their first time creating one?
    //
    const foundProfile = await Profile.findOne({ user: req.body._id });
    if (foundProfile) {
      //user profile exists and we are updating it
    }
    //user profile does not already exist, create one
    const newProfile = new Profile({
      website: req.body.website,
      "social.youtube": req.body.youtube,
      "social.twitter": req.body.twitter,
      "social.facebook": req.body.facebook,
      "social.linkedin": req.body.linkedin,
      "social.instagram": req.body.instagram
    });
    newProfile
      .save()
      .then(newProfile => res.json(newProfile))
      .catch(err => console.log(err));

    //Profile has been created
  },
  deleteUserandProfile: async (req, res, next) => {}
};
