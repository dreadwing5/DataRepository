const express = require("express");
const router = express.Router();
const connection = require("../configs/DBConnection");
const { v4: uuidv4 } = require("uuid");
const { snakeCase } = require("lodash");

router.post("/faculty/:module", (req, res) => {
  // const id = uuidv4().toString().replaceAll("-", "");
  // console.log(id);
  // req.body.id = id;

  // console.log(req.body);
  const moduleName = snakeCase(req.params.module);

  console.table(req.body);

  connection.query(
    `INSERT INTO ${moduleName} SET ?`,
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
  let { event, id } = req.params;
  event = snakeCase(event);
  connection.query(
    `UPDATE ${event} SET ? Where id=${id}`,
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
