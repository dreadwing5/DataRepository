require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./configs/DBConnection");
const path = require("path");

// const webpack = require("webpack");
// const webpackDevMiddleware = require("webpack-dev-middleware");
// const config = require("./webpack.dev.config.js");
// const compiler = webpack(config);

// // Tell express to use the webpack-dev-middleware and use the webpack.config.js
// // configuration file as a base.
// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );

// Setting public directory
app.use(express.static(__dirname + "/public"));

app.use("/scripts", express.static(__dirname + "/dist"));

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
app.use("/", require("./routes/admin"));

// Server Running at port 4000
app.listen("4000", () => {
  console.log("Server Started ... http://localhost:4000");
});
