const GooglePlusTokenStrategy = require("passport-google-plus-token");
const User = require("../models/User");
const foundOtherAccount = require("./searchForEmail");

module.exports = passport => {
  passport.use(
    "googleToken",
    new GooglePlusTokenStrategy(
      {
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        passReqToCallback: true
      },
      async (req, accessToken, refreshToken, profile, done) => {
        try {
          const foundUser = await User.findOne({ "google.id": profile.id });
          if (foundUser) {
            return done({ req: req, foundUser: foundUser });
          }
          const createNewUser = new User({
            method: "google",
            google: {
              id: profile.id,
              email: profile.emails[0].value
            },
            displayName: profile.displayName,
            familyName: profile.name.familyName,
            givenName: profile.name.givenName
          });

          createNewUser
            .save()
            .then(user => {
              return done({ req: req, foundUser: user });
            })
            .catch(err => console.log(err));
        } catch (error) {
          done(error, false, error.message);
        }
      }
    )
  );
};

/*
          foundOtherAccount(profile); //does this user have an account that was created via another login method
          if (foundOtherAccount) {
            return done(null, false, {
              message: "An account already exists for your specified email"
            });
          }*/
