const express = require("express");
const router = require("express-promise-router")();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../../models/User");
const UsersController = require("../../controllers/users");
const { check, validationResult } = require("express-validator/check");
const isEmpty = require("is-empty");
const PassportJwtConf = require("../../config/passport_jwtstrategy");

/* //==========================================================================================================//GET  ROUTES BEGIN 
//=======================================================================================================*/
//@router GET api/users/current
// @desc Return current user
//@access Private
router.get(
  "/current",
  passport.authenticate("jwt", {
    session: false
  }),
  UsersController.getCurrentUser
);
/* //========================================================================================================================
//GET  ROUTES END 
//========================================================================================================================*/

/* //========================================================================================================================
//POST  ROUTES BEGIN 
//========================================================================================================================*/
//@router POST api/users/register
// @desc User Registration
//@access Public
router.post(
  "/register",
  [
    check("name", "Name must be provided").isEmpty(),
    check("username").isEmail(),
    check("password", "Password must be at least 5 characters long ").isLength({
      min: 5
    }),
    check("password", "Password and confirm Password must match").equals(
      req.body.confirmPassword
    )
  ],
  UsersController.registerUser
);

//@router POST api/users/login
// @desc User Login
//@access Public
router.post("/login", [], UsersController.loginUser);
/* //========================================================================================================================
//POST ROUTES END 
//========================================================================================================================*/
/* //========================================================================================================================
//DELETE  ROUTES BEGIN 
//========================================================================================================================*/
//@router DELETE api/user/
// @desc delete user
//@access Private
router.delete(
  "/",
  passport.authenticate("jwt", {
    session: false
  }),
  UsersController.deleteUser
);
/* //========================================================================================================================
//DELETE ROUTES END 
//========================================================================================================================*/

module.exports = router;
