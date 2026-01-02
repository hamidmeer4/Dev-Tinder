const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://hmdm3r_db_user:aDjAGP739FClOC3G@dev-tinder.ipwadxr.mongodb.net/dev-tinder-playground");
}

module.exports = connectDB;