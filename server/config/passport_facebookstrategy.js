const FacebookTokenStrategy = require("passport-facebook-token").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = passport => {
  passport.use(
    "facebookToken",
    new FacebookTokenStrategy(
      {
        clientID: process.env.FB_ID,
        clientSecret: process.env.FB_SECRET,
        callbackURL: process.env.FB_URL
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const foundUser = await User.findOne({ "facebook.id": profile.id });
          if (foundUser) {
            return done(null, foundUser);
          }
          const createNewUser = new User({
            method: "facebook",
            facebook: {
              id: profile.id,
              email: profile.emails[0].value
            }
          });

          await createNewUser.save();
          done(null, createNewUser);
        } catch (error) {
          done(error, false, error.message);
        }
      }
    )
  );
};
