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
  console.log(req.body);
  for (const p in req.body) {
    console.log(p);
    if (p.includes("-")) {
      let ele = p.split("-");
      let ele1 = ele[0];
      let ele2 = req.body[p];
      delete req.body[p];
      if (req.body[ele1] == undefined) req.body[ele1] = ele2;
      else req.body[ele1] += "," + ele2;
    }
  }
  // console.log(req.body);
  const module = req.params.module.toLowerCase();
  console.log(module);
  console.table(req.body);
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
