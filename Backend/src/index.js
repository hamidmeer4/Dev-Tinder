// Import express
const express = require("express");
// Create an instance of express
const app = express();
app.use(express.json())

// 3 api's
app.get("/about", (req, res) => {
  res.send("Hi my nmae is hamid meer and im from pakistan...");
});
app.get("/contact-us", (req, res) => {
  res.send("Here for contact number...");
});
app.get("/faqs", (req, res) => {
  res.send("now the faq is about the project project...");
});

app.get("/", (req, res) => {
  res.send("Hello from Home Page!");
});

// post 

const users  = [];
app.post("/addUser",(req,res)=> {

    const body = req.body;
    const newUser = {
        firstname : "Hamid",
        lastname : "Bangash",
    }
    users.push(newUser)
    res.json({
        message : "Added User Successfully",
        data: users
    })
})

app.get("/getAllUser", (req,res) => {
 res.json({
    users
 })
})

// Start the server on port 3000
app.listen(7000, () => {
  console.log("✅ Server is running on http://localhost:3000");
});















