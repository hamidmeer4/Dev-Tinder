// 1) creating server 

const express = require("express");
const app = express();

//1 play with routes and extention means /hell , hello/2 , hello/user/101 ...
// app.use("/hello",(req,res)=> {
//    res.send("Response for Hello from server")
// })

// app.use("/test",(req,res)=> {
//    res.send("Response for test from server")
// })

// app.use("/hello/2",(req,res)=> {
//    res.send("Response for Hello222 from server")
// })


// 2 ) order of routes matter practice then set routes /hello
// app.use('/test',(req, res) => {
//    res.send("response from server for test")
// })

// app.use('/hello',(req, res) => {
//    res.send("response from server for hello ...")
// })

// app.use('/',(req, res) => {
//    res.send("response from server for home page")
// })


// write logic to handle get, post , patch and delete api call test on them on postman 

// app.get('/getUser',(req, res) => {
//    console.log({first:"hamid...",last:"meer"})
//    res.send("response from server for firstName")
// })

// app.post('/postUser',(req, res) => {
//    res.send("response from server for hello (POST)...")
// })

// app.delete('/deleteUser',(req, res) => {
//    res.send("deleted succesfully ...")
// })




// ?, + , * , () use regix in routes 
// Is se pehle wala character optional hai. ?
// app.get(/colou?r/, (req, res) => {
//    res.send("color or colour matched!");
// });

// // Is se pehle wala character 1 ya us se zyada martaba aa sakta hai. +
// app.get(/go+gle/, (req, res) => {
//    res.send("google match!");
// });




// Pehle wala character 0 ya zyada martaba aa sakta hai.*

// app.get(/ab*cd/, (req, res) => {
//    res.send("matched ab*cd pattern");
// });



// Group ko treat karo ek unit ki tarah.()
//  app.get(/hello(world)?/,(req,res) => {
//    res.send("response for grouping ")
//  })

// app.get(/(ha)+/, (req,res)=> {
//  res.send("reponse hahhahaha")
// })





// reading the dynmic routes /a/ , /.*fly$/...


// app.get(/a/,(req,res) => {
//    res.send("response for a, apple , anaar, so oneee")
// })


// app.get(/.*fly$/,(req,res) => {
//    res.send("response for fly in the last")
// })

// start with hello
// app.get(/^\/hello/, (req, res) => {
//   res.send("Starts with hello");
// })

// only number url matched 
// app.get(/^\/[0-9]+$/, (req, res) => {
//   res.send("Only numbers matched!");
// });



// dynamic routes 

app.get("/user/:id/:name", (req, res) => {
  res.send({
    id: req.params.id || "No ID provided",
    name: req.params.name
  });
});

app.listen(7777, () => {
  console.log("Server running on port 7777");
});