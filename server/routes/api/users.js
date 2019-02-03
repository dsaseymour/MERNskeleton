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
    check("name", "Name must be provided").isEmpty(),
    check("username").isEmail(),
    check("password", "Password must be at least 5 characters long ").isLength({
      min: 5
    }),
    check("confirmPassword", "Password and confirm Password must match").equals(
      "password"
    )
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
      .isEmail()
      .withMessage("Must provide username"),
    check("password")
      .exists()
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
