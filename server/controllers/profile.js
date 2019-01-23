const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

module.exports = {
  getCurrentUser: async (req, res, next) => {},
  getProfileByHandle: async (req, res, next) => {},
  getProfileByUserID: async (req, res, next) => {},
  getAllProfiles: async (req, res, next) => {},
  createUserProfile: async (req, res, next) => {},
  deleteUserandProfile: async (req, res, next) => {}
};
