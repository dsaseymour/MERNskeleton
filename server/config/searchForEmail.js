const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = profile => {
  async profile => {
    try {
      const foundLocalEmail = await User.findOne({
        "local.email": profile.emails[0]
      });
      const foundGoogleEmail = await User.findOne({
        "facebook.email": profile.emails[0]
      });
      const foundFbEmail = await User.findOne({
        "google.email": profile.emails[0]
      });

      if (foundLocalEmail | foundGoogleEmail | foundFbEmail) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  };
};
