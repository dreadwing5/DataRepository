const express = require("express");
const router = express.Router();
const connection = require("../configs/DBConnection");

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
    res.render("admin/admin_addFields", {
      title: "COE",
      fields: results,
    });
  });
});
router.post("/", function (req, res, next) {
  const coeDetails = req.body;

  var sql = "INSERT INTO COE SET ?";
  db.query(sql, coeDetails, function (err, data) {
    if (err) throw err;
    console.log("data is inserted successfully ");
  });
  res.redirect("/admin/admin_addUser");
});
module.exports = router;
