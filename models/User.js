const mongoose = require("mongoose");
// var passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    min: [4, "Username too short"],
    max: 12,
    required: [true, "Kindly provide a username"]
  },
  password: {
    type: String,
    min: [6, "Password too short"],
    max: 50,
    required: [true, "Kindly provide a valid password"]
  },
  email: {
    type: String,
    min: [3, "Email too short"],
    max: 50,
    required: [false, "Kindly provide a valid email"],
    unique: true
  },
  confirmPassword: {
    type: String,
    min: [6, "Password too short"],
    max: 50,
    required: [true, "Kindly provide a valid confirm password"]
  }
});

// UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
