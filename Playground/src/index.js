// 1) creating server
const express = require("express");
const connectDB = require("./config/database");
const { User } = require("./models/user.js");
const { validatorSignup } = require("./utils/validator.js");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());

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
    user.save();
    res.send("User Successfully Added.");
  } catch (err) {
    throw new Error("Invalid Credentials...");
  }
});

app.post("/login", async (req,res) => {
  try {
    const { emailId, password } = req.body;
    
    const user = await User.findOne({emailId,emailId})

    if(!user) {
      throw new Error("Invalid Credential");
    }
    
    const commparedPassword = await bcrypt.compare(password, user.password)

    if(commparedPassword) {
      res.send("Login Successfully..")
    }
    else {
    throw new Error("Invalid Credential");

    }
  } catch(err) {
   res.status(400).send("ERROR: " + err);
  }
})

app
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
