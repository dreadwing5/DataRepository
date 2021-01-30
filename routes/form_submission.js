const express = require("express");
const router = express.Router();
const connection = require("../configs/DBConnection");

router.post("/students/:module", (req, res) => {
  const module = req.params.module;
  connection.query(
    `INSERT INTO ${module} SET ?`,
    req.body,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("Data Added Successfully!");
        return res.send(results);
      }
    }
  );
});

router.post("/faculty/:module", (req, res) => {
  const module = req.params.module;
  connection.query(
    `INSERT INTO ${module} SET ?`,
    req.body,
    function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: "error ocurred",
        });
      } else {
        console.log("Data Added Successfully!");

        res.send({
          code: 200,
          message: "Added successfully!",
        });
      }
    }
  );
});

module.exports = router;
