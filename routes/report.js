const express = require("express");
const router = express.Router();
const connection = require("../configs/DBConnection");
const {
  ensureAuthenticated,
  forwardAuthenticated,
} = require("../configs/auth");

//Route for Student Report Generation
router.get("/students/search", ensureAuthenticated, (req, res) => {
  res.render("report/stu_search", {
    module: "Student",
    title: "",
    Username: req.user.name,
  });
});

//Route for Faculty FacReport Generation
router.get("/faculty/search", ensureAuthenticated, (req, res) => {
  res.render("report/fac_search", {
    title: "",
    module: "Faculty",
    Username: req.user.name,
  });
});

//Filter Data and Print for both Faculty & Student
router.post("/search", (req, res) => {
  let module = req.body.moduleName;
  let event = "stu_" + req.body.event;
  if (module === "Faculty") {
    event = "fac_" + req.body.event;
  }
  let fromDate = req.body.fromDate;
  let toDate = req.body.toDate;
  let dept = req.body.dep.toUpperCase();
  let COE = req.body.COE;
  let eventName = req.body.event;
  eventName =
    eventName.charAt(0).toUpperCase() +
    eventName.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2");
  //All should  look for all the table in database

  if (req.body.event == "all") {
    res.json({
      message: "All field is under development",
    });
    return;
  }
  let sql = `Select * from ${event} Where (filterDate BETWEEN ? AND ?)`;
  connection.query(sql, [fromDate, toDate], (err, result, fields) => {
    if (err) throw err;
    // console.log(result);
    let data = [];
    let detailsReq = true;
    result.forEach((res, i) => {
      if (res.department == null) {
        res.department = "NULL";
      }
      if (req.body.details == "false") {
        delete res.description;
        detailsReq = false;
      }
      delete res.filterDate;
      if (
        (res.department == "NULL" || dept == "ALL" || res.department == dept) &&
        (COE == "All" || COE == res.COE)
      ) {
        data.push(res);
      }
    });
    if (data.length == 0) {
      res.json({
        error: "the data is empty based on your search results",
      });
      return;
    }

    //Check for Details req

    if (detailsReq) {
      res.render("report/full_report", {
        module: module,
        data: data,
        event: eventName,
      });
    } else {
      res.render("report/report_without_desc", {
        module: module,
        data: data,
        event: eventName,
      });
    }
  });
});

module.exports = router;
