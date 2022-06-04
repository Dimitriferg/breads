const express = require("express");
// DEPENDENCIES
const methodOverride = require("method-override");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
console.log(PORT);
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads!");
});

// LISTEN
app.listen(PORT, () => {
  console.log("nomming at port", PORT);
});

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads");
});

// Breads
const breadsController = require("./controllers/breads_controller.js");
app.use("/breads", breadsController);

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
// MIDDLEWARE
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

// MIDDLEWARE
app.use(methodOverride("_method"));

// 404 Page
app.get("*", (req, res) => {
  res.send("404");
});
