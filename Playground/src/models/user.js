const moogoose = require("mongoose");

const userSchema = new moogoose.Schema(
  {
  firstName: { type: String, required: true, minLength: 4, maxLength: 15, trim: true },
  lastName: { type: String, trim: true },
  emailId: { 
     type: String,
     required: true,
     unique: true,
     trim: true
  },
  password: { type: String, required: true, trim: true },
  age: { type: Number, min: 18},
  gender: { type: String,
    validate(val) {
      if(!['male','female','other'].includes(val)) {
        throw new Error("you did'nt enter exact gender...");
      }
    }
  },
  imgUrl: {type: String, default: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"},
  about: {type: String, default: "this is about for a user " },
  skills: [String]

}, { timestamps: true });
const User = moogoose.model("User", userSchema);

module.exports = {
  User,
};
