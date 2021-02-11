require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./configs/DBConnection");

// Setting public direction
app.use(express.static(__dirname + "/public"));

app.use("/scripts", express.static(__dirname + "/node_modules"));

// Set ejs template
app.set("view engine", "ejs");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routes
app.use("/", require("./routes/index"));
app.use("/", require("./routes/form_submission"));
app.use("/", require("./routes/report"));

// Server Running at port 4000
app.listen("4000", () => {
  console.log("Server Started ... http://localhost:4000");
});
