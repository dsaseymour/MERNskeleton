const express = require("express");
const router = express.Router();
const passport = require("passport");
const UsersController = require("../../controllers/users");

//========================================================================================================================
//POST  ROUTES BEGIN
//========================================================================================================================*/
//@router POST auth/facebook
// @desc
//@access
router.post(
  "/facebook",
  passport.authenticate(
    "facebookToken",
    {
      session: false
    },
    UsersController.facebookAuth
  )
);

//@router POST auth/google
// @desc
//@access
router.post(
  "/google/",
  passport.authenticate(
    "googleToken",
    {
      session: false
    },
    UsersController.googleAuth
  )
);

//========================================================================================================================
//POST ROUTES END
//========================================================================================================================*/
module.exports = router;
