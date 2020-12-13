var express = require("express");
var app = express();
var bGround = require("fcc-express-bground");
require("dotenv").config();

app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

bGround.log("Hello World");
console.log("Hello World");

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

//app.get("/json", function(req, res) {
//  res.json({ message: "Hello json" });
//});

app.get("/json", function(req, res) {
  var jsonResponse = { message: "Hello json" };
  if (process.env.MESSAGE_STYLE === "uppercase") {
    jsonResponse.message = jsonResponse.message.toUpperCase();
  }
  res.json(jsonResponse);
});

module.exports = app;
