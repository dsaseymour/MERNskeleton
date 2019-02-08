const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const Profile = require("../models/Profile");
const User = require("../models/User");

module.exports = {
  getCurrentProfile: async (req, res, next) => {
    const foundMyProfile = await Profile.findOne({ user: req.user.id });

    res.json(foundMyProfile);
  },
  getProfileByHandle: async (req, res, next) => {
    const errors = {};
    const foundRequestUser = await Profile.findOne({
      handle: req.params.handle
    });
    if (!foundRequestUser) {
      errors.noprofile = "There is no profile for this user";
      res.status(404).json(errors);
    }
    res.json(profile);
  },
  getProfileByUserID: async (req, res, next) => {},
  getAllProfiles: async (req, res, next) => {},
  editProfileBasic: async (req, res, next) => {},
  editProfileBio: async (req, res, next) => {},
  editProfileSocial: async (req, res, next) => {},
  deleteUserandProfile: async (req, res, next) => {}
};
