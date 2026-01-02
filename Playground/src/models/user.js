const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },

    emailId: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email address");
        }
      },
    },

    password: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Password is not strong enough");
        }
      },
    },

    age: { type: Number, min: 18 },

    gender: {
      type: String,
      validate(val) {
        if (!["male", "female", "other"].includes(val)) {
          throw new Error("Gender must be male, female or other");
        }
      },
    },

    imgUrl: {
      type: String,
      default:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      validate(val) {
        if (!validator.isURL(val)) {
          throw new Error("URL is not correct please correct it...");
        }
      },
    },

    about: { type: String, default: "this is about for a user" },
    skills: [String],
  },
  { timestamps: true }
);

userSchema.methods.getJWT = function () {
  const user = this // refer to above schema 
  return jwt.sign(
    { _id: user._id },
    "@devTinder123",
    { expiresIn: "7d" }
  );
};

userSchema.methods.comparePassword = async function (passwordInputByUser) {
  return await bcrypt.compare(passwordInputByUser, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = { User };
