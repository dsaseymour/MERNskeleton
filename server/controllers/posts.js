const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");

module.exports = {
  getAllPosts: async (req, res, next) => {},
  getPostByID: async (req, res, next) => {},
  createPost: async (req, res, next) => {},
  addCommentToPost: async (req, res, next) => {},
  deletePost: async (req, res, next) => {},
  deleteCommentFromPost: async (req, res, next) => {}
};
