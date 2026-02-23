const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required !!!!"],
    maxlength: 20,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "The email is required !!!!"],
    validate: [validator.isEmail, "Email is not valid !!!"],
    unique: true,
    lowercase: true,
    // uppercase: true,
  },
  password: {
    type: String,
    required: [true, "The password is required !!!!"],
    minlength: 8,
  },
  confirm_password: {
    type: String,
    required: [true, "The C_password is required !!!!"],
    minlength: 8,
    validate: {
      validator: function (cPass) {
        return cPass === this.password;
      },
      message: "Pass and cPass does not match !!!!",
    },
  },
  role: {
    type: String,
    enum: ["admin", "user", "test"],
    default: "user",
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  password_changed_at: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
