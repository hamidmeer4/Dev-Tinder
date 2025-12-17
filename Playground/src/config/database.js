const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://hmdbangash07_db_user:HJrbl2doZlrEf4xm@cluster0.kh1xzcw.mongodb.net/dev-tinder-practice");
}

module.exports = connectDB;