const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://hmdbangash07_db_user:YZS4WCt8UlMvCjcK@cluster0.kh1xzcw.mongodb.net/devTinder");
}

module.exports = connectDB;