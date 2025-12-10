// 1) creating server

const express = require("express");
const app = express();

// simple route handler
// app.use("/getUser",(req,res) => {
//    console.log("first route handler ...")
//    res.send("first Response from server...")
// })

// now i use next() to create multiple route handler ....
// app.use("/getUser", (req,res,next) => {
//    console.log("first route handler ...")
//    res.send("first Response from server...")
//    next()

// }, (req,res,next) => {
//    console.log("2nd route handler ...")
//     next()
//    // res.send("2nd Response from server...")

// }, (req,res,next) => {
//    console.log("3rd route handler ...")
//    // res.send("2nd Response from server...")
//    next()
// }, (req,res,next) => {
//    console.log("4th route handler ...")
//    next()
//    res.send("4th Response from server...")
// }, (req,res) => {
//    console.log("5th route handler ...")
//    res.send("5th Response from server...")
// }
// )

// now i use array sign routes
app.use("/getUser", [
  (req, res, next) => {
    console.log("first route handler ...");
    res.send("first Response from server...");
    next();
  },
  (req, res, next) => {
    console.log("2nd route handler ...");
    next();
    // res.send("2nd Response from server...")
  },
  (req, res, next) => {
    console.log("3rd route handler ...");
    // res.send("2nd Response from server...")
    next();
  },
  (req, res, next) => {
    console.log("4th route handler ...");
    next();
    res.send("4th Response from server...");
  },
  (req, res) => {
    console.log("5th route handler ...");
    res.send("5th Response from server...");
  },
]);

app.listen(7777, () => {
  console.log("Server running on port 7777");
});
