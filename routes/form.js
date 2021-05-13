const express = require("express");
const router = express.Router();
const connection = require("../configs/DBConnection");
// const { v4: uuidv4 } = require("uuid");
const { snakeCase } = require("lodash");

//@route    PUT update/event/id
//@desc    Insert form data into table
//@access   Private

router.post("/faculty/:module", (req, res) => {
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

//@route    PUT update/event/id
//@desc     Update the table using event name and id
//@access   Private

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
