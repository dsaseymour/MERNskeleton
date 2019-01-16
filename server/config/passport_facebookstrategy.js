const FacebookStrategy = require("passport-facebook").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = passport => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOKAPPID,
        clientSecret: process.env.FACEBOOKAPPSECRET,
        callbackURL: "http://www.example.com/auth/facebook/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate(function(err, user) {
          if (err) {
            return done(err);
          }

          done(null, user);
        });
      }
    )
  );
};
