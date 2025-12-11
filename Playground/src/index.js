// 1) creating server

const express = require("express");
const {auth, userAuth} = require('./middleware/auth')
const app = express();

app.use("/admin",auth)
app.use("/user",userAuth)


app.get("/admin/getAllData", (req,res) => {
   try {
      throw new Error("error in code ")
   } catch(err) {
      res.send("something error in code ...")
   }
})

app.get("/user/getUserData",(req,res) => {
   console.log("this is the get all data ");
   res.send("this is the getUser all data ");
})

app.listen(7777, () => {
  console.log("Server running on port 7777");
});
