const moogoose = require("mongoose");

const userSchema = new moogoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  emailId: { type: String },
  password: { type: String },
  age: { type: Number },
  gender: { type: String },
});


module.exports = moogoose.model("User",userSchema)

