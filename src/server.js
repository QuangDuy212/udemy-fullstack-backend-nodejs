const express = require("express"); //commonjs
const path = require("path"); //commonjs
// import express from "express"; //es modules

require("dotenv").config();
console.log(">>> check env: ", process.env);

const app = express(); // app express
const port = process.env.PORT || 8888; // port hardcode .uat .prod
const hostname = process.env.HOST_NAME;

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//khai bao route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("check ABC");
});

app.get("/hoidanit", (req, res) => {
  // res.send("<h1>hoi dan it with eric</h1>");
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
