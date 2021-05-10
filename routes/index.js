const express = require("express");
const router = express.Router();
const connection = require("../configs/DBConnection");
const { snakeCase, startCase } = require("lodash");

router.get("/", (req, res) => {
  res.render("home", {
    Username: "test",
  });
});

//Faculty Page Route

router.get("/faculty/:module", (req, res) => {
  const moduleName = snakeCase(req.params.module); //Dynamically render the page using url params
  const title = startCase(req.params.module); //Send the tiltle of html page
  res.render(`fields/${moduleName}`, {
    title: title,
    Username: "test",
    isInsertMode: true,
  });
});

//Get COE Route

router.get("/coe", (req, res) => {
  let data = [];
  let sql = `Select * from COE`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    const results = Object.values(JSON.parse(JSON.stringify(result)));
    res.send(results);
  });
});

/* //For later use, where we need to make our own api for image upload
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
}).single("file"); */

module.exports = router;
