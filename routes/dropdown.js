const express = require("express");
const router = express.Router();
const connection = require("../configs/DBConnection");
const { snakeCase } = require("lodash");

//Insert dropdwon field
router.post("/dropdown/:field", (req, res) => {
  let field = snakeCase(req.params.field);
  const { name } = req.body;
  const value = `("${name}")`; //Format name into a string
  connection.query(
    `INSERT INTO ${field} (name) VALUES ${value}`,
    function (error, results) {
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
          message: "Added successfully!!",
        });
      }
    }
  );
});

//Delete Dropdown field

router.delete("/dropdown/:field", (req, res) => {
  let field = snakeCase(req.params.field);
  const { id } = req.body;
  connection.query(
    `DELETE FROM ${field} WHERE id='${id}';`,
    function (error, results) {
      if (error) {
        console.error(error);
        res.send({
          code: 400,
          failed: "error ocurred",
        });
      } else {
        console.log("Data Deleted Successfully!");

        res.send({
          code: 200,
          message: "Deleted Successfully!!",
        });
      }
    }
  );
});
module.exports = router;
