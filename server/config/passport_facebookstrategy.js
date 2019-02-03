const FacebookTokenStrategy = require("passport-facebook-token");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const foundOtherAccount = require("./searchForEmail");

module.exports = passport => {
  passport.use(
    "facebookToken",
    new FacebookTokenStrategy(
      {
        clientID: process.env.FB_ID,
        clientSecret: process.env.FB_SECRET
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log("profile", profile);
          console.log("accessToken", accessToken);
          console.log("refreshToken", refreshToken);

          const foundUser = await User.findOne({ "facebook.id": profile.id });
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
            method: "facebook",
            facebook: {
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
