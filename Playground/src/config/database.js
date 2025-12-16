const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://hmdbangash07_db_user:6oNRgQbdInU5c3Z3@cluster0.kh1xzcw.mongodb.net/dev-tinder-practice");
}

module.exports = connectDB;