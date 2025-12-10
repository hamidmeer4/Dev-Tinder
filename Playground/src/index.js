// 1) creating server

const express = require("express");
const app = express();

// middleware 
// log methiod and url
app.use((req,res,next) => {
   console.log(`log the mthod and url '${req.method}'  -  '${req.url}'`);
   next() ;
})

// Middleware 2: Add a custom header
app.use((req,res,next) => {
   res.setHeader("Hehhe-Middleware","Midddleare chaining ")
   next()
})
// 3: Route handler
app.get('/',(req,res) => {
   res.send("Hellow World from server...")
})

app.listen(7777, () => {
  console.log("Server running on port 7777");
});
