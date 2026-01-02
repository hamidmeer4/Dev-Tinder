const express = require("express");
const { authUser } = require("./middleware/auth-middleware");
// const connectDB = require("./config/database");
// const User = require("./models/User");
const app = express();
// app.use(express.json());

// middleware 
// app.use("/", (req, res, next) => {
//     console.log('Middleware 1');
//     next();
// });

// app.get('/user', authUser, (req, res) => {
//     console.log('Route handler');
//     res.send('Hello User Auth');
// });








app.listen(3001, () => {
  console.log("✅ Server is running on http://localhost:3001");
});


// connectDB()
//   .then(() => {
//     console.log("Database is Established");
//     app.listen(3001, () => {
//       console.log("✅ Server is running on http://localhost:3001");
//     });
//   })
//   .catch(() => {
//     console.log("eeror in db...");
//   });
