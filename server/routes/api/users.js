const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator/check");
const isEmpty = require("is-empty");
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
  (res, req) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
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

  (res, req) => {
    const errors = validationResult(req);
    if (!isEmpty(errors)) {
      return res.status(422).json({
        errors: errors.array()
      });
    }
  }
);

//@router POST api/users/login
// @desc User Login
//@access Public
router.post(
  "/login",

  (res, req) => {}
);
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
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() => {
        res.json({ success: true });
      });
    });
  }
);
/* //========================================================================================================================
//DELETE ROUTES END 
//========================================================================================================================*/

module.exports = router;
