const express = require("express");
const app = express();
const productRoutes = require("./product-Routes")
app.use(express.json());

// app.use("/users",(req,res,next
// ) => {
//   console.log("hiiiii am user 1")
//   next();
// })
// app.use("/users",(req,res) => {
//   console.log("hiiiii am user 2")
//   res.json("hi user 2")
// })


// middlware 
app.use("/products", productRoutes);

app.listen(7000, () => {
  console.log("✅ Server is running on http://localhost:7000");
});
