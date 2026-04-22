const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Temporary DB (memory)
let users = [];

// SIGNUP
app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  const userExists = users.find(u => u.username === username);

  if (userExists) {
    return res.json({ message: "User already exists ❌" });
  }

  users.push({ username, password });
  res.json({ message: "Signup successful ✅" });
});

// LOGIN
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    res.json({ message: "Login successful ✅" });
  } else {
    res.json({ message: "Invalid credentials ❌" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
