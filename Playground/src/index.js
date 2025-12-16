// 1) creating server
const express = require("express");
const connectDB = require("./config/database")
const {User} = require("./models/user.js")
const app = express();

app.use(express.json())

app.post("/signup", async (req,res) => {
  try {  
  const userData = new User(req.body)
    await userData.save();
    res.send("User Data Successfully Added")
   }
   catch(err) {
   res.status(500).send(err.message);
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

