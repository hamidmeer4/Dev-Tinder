// 1) creating server
const express = require("express");
const connectDB = require("./config/database")
const {User} = require("./models/user.js")
const app = express();

app.use(express.json())

// API - signup
// app.post("/signup", async (req, res) => {

//   try {
//   const user = new User(req.body)
//   await  user.save();
//   res.send("Signup Successfully ...")
//   }
//   catch (err) {
//     res.status(500).send("Error inside Db")
//   }
// })

// get 1 user from db 
// app.get("/getUser",async (req,res) => {
//   const id = req.body.id;
//  try {
//   const user = await User.find({_id: id});
//   res.send(user)
//  } catch (err) {
//    res.send(err)
//  }
// })

// get all document give name feed 
// app.get("/feed", async (req,res) => {
//   try {
//   const users = await User.find({});
//   res.send(users);
//   } catch (err) {
//     res.status(500).send(err.message)
//   }
// })


// fetch one document
// app.get("/findUser", async (req,res) => {
//   const id = req.body.id;
//   console.log(id);
//   try {  
//   const user = await User.findOne({_id: id})
//   res.send(user)
//   }
//   catch (err) {
//     res.status(500).send(err.message)
//   }

// })


// API - get usersByEmail 

// app.get("/getUserByEmail", async (req,res) => {
//   const userEmail = req.body.emailId;
//  try {
//   const user = await User.find({emailId: userEmail});
//   res.send(user)
//  }
//  catch(err) {
//   res.status(500).send(err);
//  }
// })

// get oldest user using findOne method 
// app.get("/getSingleUser", async (req,res) => {
//   const userEmail = req.body.emailId;
//  try {
//   const user = await User.findOne({emailId: userEmail});
//   res.send(user)
//  }
//  catch(err) {
//   res.status(500).send(err);
//  }
// })

// deleteUser
// app.delete("/deleteUser", async (req,res) => {
//   const id = req.body._id;

//   try {
//   await User.findOneAndDelete({_id: id})
//   res.send("User Successfull deleted...")
//   } catch(err) {
//   res.status(500).send(err);
//  }

// })

// updateUser by id 

// app.patch("/updateUser", async (req,res) => {
//   const id = req.body._id;
//   const data = req.body;
//   try {
//     await User.findOneAndUpdate(id,data)
//     res.send("Update successfully...")
//   } catch (err) {
//     res.status(500).send(err);
//   }
// })


// app.patch("/updateByUser", async (req,res) => {
//   const _firstName = req.body.firstName;
//   const data = req.body;
//   try {
//     await User.findOneAndUpdate({firstName: _firstName},data)
//     res.send("Update successfully...")
//   } catch (err) {
//     res.status(500).send(err);
//   }
// })





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

