const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const database = {
  users: [
    {
      id: 123,
      name: "John Smith",
      email: "john@email.com",
      password: "cookies",
      entries: 0,
      joined: new Date()
    },
    {
      id: 124,
      name: "Sally Thomas",
      email: "sally@email.com",
      password: "bananas",
      entries: 0,
      joined: new Date()
    }
  ]
};

app.get("/", (req, res) => {
  res.send("This is working");
});

app.post("/signin", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("success");
  } else {
    res.status(400).json("error logging in");
  }
});

app.listen(3000, () => {
  console.log("App is running");
});
