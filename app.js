require("dotenv").config();
const express = require("express");
const app = express();
const flash = require("connect-flash");
const session = require("express-session");
const connection = require("./configs/DBConnection");
const passport = require("passport");
const fs = require("fs");

require("./configs/passport")(passport);

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

//Express Session

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Connect Flash

app.use(flash());

//Global Vars

app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// Routes
app.use("/", require("./routes/index"));
app.use("/", require("./routes/user"));
app.use("/", require("./routes/admin"));
app.use("/", require("./routes/form_submission"));
app.use("/", require("./routes/report"));

//Create Default admin

connection.query(
  "SELECT mailid FROM faculty WHERE mailid = ?",
  [process.env.ADMIN_MAIL],
  (err, data) => {
    if (err) {
      console.log(err);
    }
    if (!data.length) {
      connection.query("INSERT INTO faculty SET ? ", {
        id: process.env.ADMIN_ID,
        mailid: process.env.ADMIN_MAIL,
        password: process.env.ADMIN_PASSWORD,
        role: "admin",
      });
    }
  }
);

// Server Running at port 4000
app.listen("4000", () => {
  console.log("Server Started ... http://localhost:4000");
});
