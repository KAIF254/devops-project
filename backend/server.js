const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if(username === "admin" && password === "1234") {
    res.json({ message: "Login Successful" });
  } else {
    res.status(401).json({ message: "Invalid Credentials" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
