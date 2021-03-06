const FacebookTokenStrategy = require("passport-facebook-token");
const User = require("../models/User");
const foundOtherAccount = require("./searchForEmail");

module.exports = passport => {
  passport.use(
    "facebookToken",
    new FacebookTokenStrategy(
      {
        clientID: process.env.FB_ID,
        clientSecret: process.env.FB_SECRET,
        passReqToCallback: true
      },
      async (req, accessToken, refreshToken, profile, done) => {
        try {
          //preventing duplicate accounts begins
          //use facebook id to search for existing account of this user
          //if we find the user return them
          const foundUser = await User.findOne({ "facebook.id": profile.id });
          if (foundUser) {
            return done({ req: req, foundUser: foundUser });
          }

          //preventing duplicate accounts ends
          const createNewUser = new User({
            method: "facebook",
            facebook: {
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
