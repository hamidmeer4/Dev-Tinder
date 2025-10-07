// Import express
const express = require("express");
// Create an instance of express
const app = express();
app.use(express.json());

const users = [];
var indexId = 1;
app.post("/addUser", (req, res) => {
  const body = req.body;
  users.push({
    id: indexId++,
    name: body.name,
    email: body.email,
    age: body.age,
  });

  res.json({
    message: "Added User Successfully",
    data: users,
  });
});

app.get("/getAllUser", (req, res) => {
  res.json({
    users,
  });
});

// crating a delete api

app.delete("/userDeleted/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id === userId);

  if (index !== -1) {
    users.splice(index, 1); //remove user from array
    return res.json({
      message: "User Successfully deleted...",
      data: users,
    });
  } else {
    return res.status(404).json({ message: "something error inside the api" });
  }
});

app.put("/updateUser/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const body = req.body;
  const index = users.findIndex((user) => user.id === userId);

  if (index !== -1) {
    users[index] = {
      ...users[index], // keep old data (like id)
      name: body.name || users[index].name,
      email: body.email || users[index].email,
      age: body.age || users[index].age,
    };

    return res.json({
      message: "User successfully updated...",
      data: users[index],
    });
  } else {
    return res.status(404).json({
      message: "User not found",
    });
  }
});

// Start the server on port 3000
app.listen(7000, () => {
  console.log("✅ Server is running on http://localhost:7000");
});
