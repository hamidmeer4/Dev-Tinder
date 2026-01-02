// 1) creating server
const express = require("express");
const connectDB = require("./config/database");
const { User } = require("./models/user.js");
const { validatorSignup } = require("./utils/validator.js");
const { userAuth } = require("./middleware/auth.js");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cookieParser());

// the validate worked perfect ..
// encrypt the password
// login api create
// check email and pasword first then login successfully

// signup api
app.post("/signup", async (req, res) => {
  const { firstName, lastName, emailId, password } = req.body;
  try {
    validatorSignup(req);
    const paswordHash = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: paswordHash,
    });
    await user.save();
    res.send("User Successfully Added.");
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

app.post("/login", async (req, res) => {
  //  const cookies = req.cookies

  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId, emailId });
    if (!user) {
      throw new Error("Invalid Credential");
    }
    const isValid = await user.comparePassword(password);
    if (!isValid) {
      return res.status(400).send("Invalid credentials");
    }
    // create a token here using sign
    const token = user.getJWT();

    // console.log(token)
    res.cookie("token", token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    res.send("Login Successfully..");
  } catch (err) {
    res.status(400).send("ERROR: " + err);
  }
});

app.get("/profile", userAuth, async (req, res) => {
  res.send(req.user);
});

app.get("/sendConnectionRequest", userAuth, async (req, res) => {
  res.send("User Connection Request sent " + req.user);
});

connectDB()
  .then(() => {
    console.log("the db is successfully connected");
    app.listen(7777, () => {
      console.log("Server running on port 7777");
    });
  })
  .catch((err) => {
    console.log("error in db ");
  });
