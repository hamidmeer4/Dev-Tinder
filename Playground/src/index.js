// 1) creating server 

const express = require("express");
const app = express();


// app.use((req,res) => {
//     res.send("Reponse from server")
// })

// 3) 
app.use("/test",(req,res)=> {
   res.send("Response for test from server")
})

app.use("/hello",(req,res)=> {
   res.send("Response for Hello from server")
})
// 2) 
app.listen(7777,() => {
    console.log("server is running on 7777");    
})