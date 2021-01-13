const express = require("express");
const router = express.Router();
const connection = require("../configs/DBConnection");

router.post("/faculty/eventsAttended", (req, res) => {
  console.log(req.body);
  connection.query(
    "INSERT INTO fac_eventsAttended SET ?",
    req.body,
    function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: "error ocurred",
        });
      } else {
        //   res.send({
        //     code: 200,
        //     success: "user registered sucessfully",
        //   });
        res.send({
          code: 200,
          message: "Added successfully!",
        });
      }
    }
  );
});

router.post("/faculty/clubActivities", (req, res) => {
  console.log(req.body);
  connection.query(
    "INSERT INTO fac_clubActivities SET ?",
    req.body,
    function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: "error ocurred",
        });
      } else {
        res.send({
          code: 200,
          message: "Added successfully!",
        });
      }
    }
  );
});

router.post("/faculty/awards", (req, res) => {
  console.log(req.body);
  connection.query(
    "INSERT INTO fac_awards SET ?",
    req.body,
    function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: "error ocurred",
        });
      } else {
        //   res.send({
        //     code: 200,
        //     success: "user registered sucessfully",
        //   });
        res.send({
          code: 200,
          message: "Added successfully!",
        });
      }
    }
  );
});

module.exports = router;
