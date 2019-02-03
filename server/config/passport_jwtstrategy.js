//creating the passport jwt strategy
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/User");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); //create a new extractor that will look for the JWT in the Authorization header
opts.secretOrKey = process.env.JWT_SECRET;

module.exports = passport => {
  passport.use(
    new JwtStrategy(
      opts,

      async (jwt_payload, done) => {
        try {
          const foundUser = await User.findById(jwt_payload.id);
          if (!foundUser) {
            return done(null, false);
          }

          return done(null, user);
        } catch (error) {
          done(error, false);
        }
      }
    )
  );
};
