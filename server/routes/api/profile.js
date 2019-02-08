const express = require("express");
const router = require("express-promise-router")();
const passport = require("passport");
const ProfileController = require("../../controllers/profile");

/* //==========================================================================================================//GET  ROUTES BEGIN 
//=======================================================================================================*/
/*
Get Your Current Profile
To get your current profile you must be logged in 
*/
router.get(
  "/",
  passport.authenticate("jwt", {
    session: false
  }),
  ProfileController.getCurrentProfile
);

router.get("/handle/:handle", ProfileController.getProfileByHandle);

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
  "/handle/:handle/edit-basic",
  passport.authenticate("jwt", {
    session: false
  }),
  ProfileController.editProfileBasic
);

router.post(
  "/handle/:handle/edit-bio",
  passport.authenticate("jwt", {
    session: false
  }),
  ProfileController.editProfileBio
);

router.post(
  "/handle/:handle/edit-social",
  passport.authenticate("jwt", {
    session: false
  }),
  ProfileController.editProfileSocial
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
