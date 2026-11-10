const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Book Category API");
});

app.get("/categories", (req, res) => {
  res.json([
    { id: 1, name: "Fiction" },
    { id: 2, name: "Non-Fiction" },
    { id: 3, name: "Biography" },
  ]);
});

// NEW ABOUT ROUTE
app.get("/about", (req, res) => {
  res.send(
    "Hi! My name is Reuben. I am currently learning backend development using Node.js and Express. This is my first API project!",
  );
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
