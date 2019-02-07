const express = require("express");
const router = require("express-promise-router")();
const passport = require("passport");
const UsersController = require("../../controllers/users");
const { check } = require("express-validator/check");

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
    check("username")
      .not()
      .isEmpty()
      .withMessage("Must provide username")
      .isEmail()
      .withMessage("Username must be an email address"),
    check("name")
      .not()
      .isEmpty()
      .withMessage("Name must be provided"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Password must be provided")
      .isLength({
        min: 5
      })
      .withMessage("Password must be at least 5 characters long"),
    check("confirmPassword")
      .not()
      .isEmpty()
      .withMessage("confirmation Password must be provided")
  ],
  UsersController.registerUser
);

//@router POST api/users/login
// @desc User Login
//@access Public
router.post(
  "/login",
  [
    check("username")
      .not()
      .isEmpty()
      .withMessage("Must provide username")
      .isEmail()
      .withMessage("Username must be an email address"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Must enter password")
  ],
  UsersController.localLogin
);
/* //========================================================================================================================
//POST ROUTES END 
//========================================================================================================================*/
/* //========================================================================================================================
//DELETE  ROUTES BEGIN 
//========================================================================================================================*/
//@router DELETE api/user/
// @desc delete user account
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
