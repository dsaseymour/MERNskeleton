const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const ProfileController = require("../../controllers/profile");
const PassportJwtConf = require("../../config/passport_jwtstrategy");

/* //==========================================================================================================//GET  ROUTES BEGIN 
//=======================================================================================================*/
router.get(
  "/",
  passport.authenticate("jwt", {
    session: false
  }),
  ProfileController.getCurrentUser
);

router.get(
  "handle/:handle",

  ProfileController.getProfileByHandle
);

router.get(
  "/user/:user_id",

  ProfileController.getProfileByUserID
);

router.get(
  "/all",

  ProfileController.getAllProfiles
);

/* //========================================================================================================================
//GET  ROUTES END 
//========================================================================================================================*/

/* //========================================================================================================================
//POST  ROUTES BEGIN 
//========================================================================================================================*/

router.post(
  "/",
  passport.authenticate("jwt", {
    session: false
  }),
  ProfileController.createUserProfile
);

/* //========================================================================================================================
//POST ROUTES END 
//========================================================================================================================*/
/* //========================================================================================================================
//DELETE  ROUTES BEGIN 
//========================================================================================================================*/

router.delete(
  "/",
  passport.authenticate("jwt", {
    session: false
  }),

  ProfileController.deleteUserandProfile
);

//========================================================================================================================
//DELETE ROUTES END
//========================================================================================================================*/

module.exports = router;
