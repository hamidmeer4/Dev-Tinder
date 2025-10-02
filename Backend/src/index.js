// Import express
const express = require("express");

// Create an instance of express
const app = express();

/*
1) The `app.use()` method is middleware. 
   It runs for every request (no matter which route).
   But if you want to create specific routes like "/", "/about", use `app.get()` instead.

2) Always send a response (`res.send`, `res.json`, etc.) otherwise the request will hang.

3) Use a port variable (best practice for deployment).
*/

// Default route (Home Page)
// app.use("/", (req, res) => {
//   res.send("Hello from Home Page!");
// });

app.use("/about", (req, res) => {
  res.send("This is the About Page.");
});

// Start the server on port 3000
app.listen(3001, () => {
  console.log("✅ Server is running on http://localhost:3000");
});















