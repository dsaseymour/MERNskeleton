const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: [true, "Handle is required"],
    max: 40
  },
  photo: {
    type: String
  },
  age: {
    type: Number
  },
  dateofbirth: {
    type: Date
  },
  address: {
    type: String
  },
  gender: {
    type: String
  },
  job: {
    type: String
  },
  hobbies: [
    {
      description: String
    }
  ],
  website: {
    type: String
  },
  bio: {
    type: String
  },
  social: {
    youtube: { type: String },
    twitter: { type: String },
    facebook: { type: String },
    linkedin: { type: String },
    instagram: { type: String }
  }
});
module.exports = Profile = mongoose.model("profile", ProfileSchema);
