const GooglePlusTokenStrategy = require("passport-google-plus-token");
const User = require("../models/User");
const foundOtherAccount = require("./searchForEmail");

module.exports = passport => {
  passport.use(
    "googleToken",
    new GooglePlusTokenStrategy(
      {
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log("profile", profile);
          console.log("accessToken", accessToken);
          console.log("refreshToken", refreshToken);

          const foundUser = await User.findOne({ "google.id": profile.id });
          if (foundUser) {
            return done(null, foundUser);
          }

          /*
          foundOtherAccount(profile); //does this user have an account that was created via another login method
          if (foundOtherAccount) {
            return done(null, false, {
              message: "An account already exists for your specified email"
            });
          }*/
          const createNewUser = new User({
            method: "google",
            google: {
              id: profile.id,
              email: profile.emails[0].value
            },
            displayName: profile.displayName,
            familyName: profile.Name.familyName,
            givenName: profile.Name.givenName
          });

          createNewUser.save();
          done(null, createNewUser);
        } catch (error) {
          done(error, false, error.message);
        }
      }
    )
  );
};
