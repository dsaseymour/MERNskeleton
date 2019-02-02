const GoogleTokenStrategy = require("passport-google-oauth").OAuth2Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const foundOtherAccount = require("./searchForEmail");

module.exports = passport => {
  passport.use(
    new GoogleTokenStrategy(
      {
        clientID: process.env.GOOGLECLIENTID,
        clientSecret: process.env.GOOGLECLIENTSECRET
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const foundUser = await User.findOne({ "google.id": profile.id });
          if (foundUser) {
            return done(null, foundUser);
          }
          foundOtherAccount(profile); //does this user have an account that was created via another login method
          if (foundOtherAccount) {
            return done(null, false, {
              message: "An account already exists for your specified email"
            });
          }
          const createNewUser = new User({
            method: "google",
            google: {
              id: profile.id,
              email: profile.emails[0].value
            },
            displayName: profile.displayName,
            familyName: profile.Name.familyName,
            givenName: profile.Name.givenName,
            photo: profile.photos[0].value
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
