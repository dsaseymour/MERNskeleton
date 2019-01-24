const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");
const PostController = require("../../controllers/posts");
const PassportJwtConf = require("../../config/passport_jwtstrategy");

/* //==========================================================================================================//GET  ROUTES BEGIN 
//=======================================================================================================*/

router.get(
  "/",

  PostController.getAllPosts
);

router.get("/:id", PostController.getPostByID);

/* //========================================================================================================================
//GET  ROUTES END 
//========================================================================================================================*/

/* //========================================================================================================================
//POST  ROUTES BEGIN 
//========================================================================================================================*/

router.post(
  "/:id",

  passport.authenticate("jwt", {
    session: false
  }),

  [
    body("text")
      .isEmpty()
      .withMessage("Text field is required")
      .isLength(data.text, { min: 10, max: 300 })
      .withMessage("'Post must be between 10 and 300 characters'")
  ],
  PostController.createPost
);

router.post(
  "/comment/:id",
  passport.authenticate("jwt", {
    session: false
  }),
  PostController.addCommentToPost
);

/* //========================================================================================================================
//POST ROUTES END 
//========================================================================================================================*/
/* //========================================================================================================================
//DELETE  ROUTES BEGIN 
//========================================================================================================================*/
router.delete(
  "/:id",
  passport.authenticate("jwt", {
    session: false
  }),
  PostController.deletePost
);

router.delete(
  "/comment/:id/:comment_id",
  passport.authenticate("jwt", {
    session: false
  }),
  PostController.deleteCommentFromPost
);
//========================================================================================================================
//DELETE ROUTES END
//========================================================================================================================*/

module.exports = router;
