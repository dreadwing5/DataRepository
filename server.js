require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./configs/DBConnection");
const path = require("path");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

const publicDirectory = path.join(__dirname, "public");

// Setting public directory

app.use(express.static(publicDirectory));

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  console.log("Devlopment Build");

  const liveReloadServer = livereload.createServer();

  liveReloadServer.watch([publicDirectory + "/css", __dirname + "dist"]);

  // ping browser on Express boot, once browser has reconnected and handshaken
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });
  app.use(connectLiveReload());
}
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
app.use("/", require("./routes/form"));
app.use("/", require("./routes/report"));
app.use("/", require("./routes/admin"));
app.use("/", require("./routes/dropdown"));

// Server Running at port 4000
app.listen("4000", () => {
  console.log("Server Started ... http://localhost:4000");
});
