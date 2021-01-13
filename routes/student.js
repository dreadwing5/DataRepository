const express = require("express");
const router = express.Router();
const connection = require("../configs/DBConnection");

router.post("/students/eventsAttended", (req, res) => {
  console.log(req.body);
  connection.query(
    "INSERT INTO stu_eventsAttended SET ?",
    req.body,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("Data Added Successfully!");
      }
    }
  );
});

router.post("/students/awards", (req, res) => {
  console.log(req.body);
  connection.query(
    "INSERT INTO stu_awards SET ?",
    req.body,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("Data Added Successfully!");
      }
    }
  );
});

router.post("/students/placement", (req, res) => {
  console.log(req.body);
  connection.query(
    "INSERT INTO stu_placement SET ?",
    req.body,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("Data Added Successfully!");
      }
    }
  );
});

module.exports = router;
