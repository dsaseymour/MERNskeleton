const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = passport => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLECLIENTID,
        clientSecret: process.env.GOOGLECLIENTSECRET,
        callbackURL: "http://www.example.com/auth/google/callback"
      },

      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate(
          {
            googleId: profile.id
          },

          function(err, user) {
            return done(err, user);
          }
        );
      }
    )
  );
};
