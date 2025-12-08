const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/User");
const app = express();

app.use(express.json())

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
  await user.save();
  res.json( "User Successfully Added");
} catch (err) {
  res.status(400).json("Something Error in your logic ")
}
});

connectDB()
  .then(() => {
    console.log("Database is Established");
    app.listen(3001, () => {
      console.log("✅ Server is running on http://localhost:3001");
    });
  })
  .catch(() => {
    console.log("Database is Established");
  });
