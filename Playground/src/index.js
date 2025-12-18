// 1) creating server
const express = require("express");
const connectDB = require("./config/database")
const {User} = require("./models/user.js")
const app = express();
app.use(express.json())


// signup api 
app.post("/signup",async (req,res) => {
 try {
  const user = new User(req.body)
  await user.save();
  res.send("User Successfull Added")
 }
 catch(err) {
  res.status(500).send("Something error in signup Api")
 }
})

// update api 
app.patch("/updateUser",async (req,res) => {
  const _id = req.body._id;
  const data = req.body;
 
try {

  await User.findByIdAndUpdate(_id,data)
  res.send("Update Successfully....")
} catch(err) {
  res.status(500).send("Something error in signup Api")
 }
})

// api level validation 
app.patch("/updateUser/:_id",async (req,res) => {
  const _id = req.params?._id;
  const data = req.body;
 
try {
  // const isAllowedUpdate = ["lastName","age","gender","imgUrl","about","skills"]
  // const isAllowed = Object.keys(data).every(k => isAllowedUpdate.includes(k));

  // if(!isAllowed) {
  //   throw new Error("Update not Allowed")
  // }
  await User.findByIdAndUpdate(_id,data)
  res.send("Update Successfully....")
} catch(err) {
  res.status(500).send("Something error in signup Api")
 }
})


connectDB()
.then(() => {
  console.log("the db is successfully connected");
  app.listen(7777, () => {
  console.log("Server running on port 7777");
});
})
.catch((err) => {
  console.log("error in db ");

})

