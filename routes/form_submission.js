const express = require("express");
const router = express.Router();
const connection = require("../configs/DBConnection");
const { v4: uuidv4 } = require("uuid");

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
  // const id = uuidv4().toString().replaceAll("-", "");
  // console.log(id);
  // req.body.id = id;

  // console.log(req.body);
  const module = req.params.module;
  // console.log(module);
  console.table(req.body);
  connection.query(
    `INSERT INTO ${module} SET ?`,
    req.body,
    function (error, results, fields) {
      if (error) {
        console.error(error);
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

router.put("/update/:event/:id", (req, res) => {
  const { event, id } = req.params;
  connection.query(
    `UPDATE fac_${event} SET ? Where id=${id}`,
    req.body,
    function (error, results, fields) {
      if (error) {
        console.log(error);
        res.send({
          code: 400,
          failed: "error ocurred",
        });
      } else {
        console.log("Data Updated Successfully!");
        res.send({
          code: 200,
          message: "Updated Successfully!",
        });
      }
    }
  );
});

module.exports = router;
