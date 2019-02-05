const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    method: {
      type: String,
      enum: ["local", "google", "facebook"],
      required: true
    },
    local: {
      email: {
        type: String,
        lowercase: true
      },
      passwordHash: {
        type: String
      }
    },
    google: {
      id: {
        type: String
      },
      email: {
        type: String,
        lowercase: true
      }
    },
    facebook: {
      id: {
        type: String
      },
      email: {
        type: String,
        lowercase: true
      }
    },
    displayName: {
      type: String
    },
    familyName: {
      type: String
    },
    givenName: {
      type: String
    }
  },
  {
    timestamps: true
  }
);
const User = mongoose.model("users", userSchema);
module.exports = User;
