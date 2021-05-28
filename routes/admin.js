const express = require("express");
const router = express.Router();
const passport = require("passport");
const connection = require("../configs/DBConnection");
// const {
//   ensureAuthenticated,
//   forwardAuthenticated,
// } = require("../configs/admin-auth");

//Admin Panel
router.get("/admin", function (req, res) {
  res.render("admin/dashboard", {
    title: "Dashboard",
  });
});

//Add User Page
router.get("/add-user", function (req, res) {
  res.render("admin/add_user", {
    title: "Add User",
  });
});

//Render Add Dropdwon Field
router.get("/admin/add-fields", (req, res) => {
  connection.query("SELECT * FROM coe", (err, result) => {
    if (err) {
      console.error(err);
      res.send({
        code: 400,
        failed: "error ocurred",
      });
    }

    const results = Object.values(JSON.parse(JSON.stringify(result)));

    //render coe page
    res.render("admin/add_fields", {
      title: "COE",
      fields: results,
    });
  });
});

//Login Page
router.get("/admin/login", function (req, res) {
  res.render("admin/login");
});

//Work in progress
router.get("/admin/roles", (req, res) => {
  res.render("404");
});

router.get("/admin/remove-user", (req, res) => {
  res.render("404");
});

//Login Handle
router.post("/admin/login", (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user || user.role !== "admin") {
      req.flash("success_msg", "You do not have permission");
      return res.redirect("/admin/login");
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect("/admin");
    });
  })(req, res, next);
});

//Logout Handle
router.get("/admin/logout", (req, res) => {
  req.logOut();
  req.flash("success_msg", "You are logged out");
  res.redirect("/admin/login");
});

module.exports = router;
