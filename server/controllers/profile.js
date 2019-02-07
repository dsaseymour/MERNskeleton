const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const Profile = require("../models/Profile");
const User = require("../models/User");

module.exports = {
  getCurrentUser: async (req, res, next) => {
    res.json("getCurrentUser");
  },
  getProfileByHandle: async (req, res, next) => {
    res.json("getProfileByHandle");
  },
  getProfileByUserID: async (req, res, next) => {
    res.json("getProfileByUserID");
  },
  getAllProfiles: async (req, res, next) => {
    res.json("getAllProfiles");
  },
  editProfileBasic: async (req, res, next) => {
    res.json("editProfileBasic");
  },
  editProfileBio: async (req, res, next) => {
    res.json("editProfileBio");
  },
  editProfileSocial: async (req, res, next) => {
    res.json("editProfileSocial");
  },
  deleteUserandProfile: async (req, res, next) => {
    res.json("deleteUserandProfile");
  }
};
