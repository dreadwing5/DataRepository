const express = require("express");
const router = express.Router();
const { snakeCase, startCase } = require("lodash");

router.get("/", (req, res) => {
  res.render("index", {
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
    isInsertMode: true, //This is for checking if we are inserting the data or updating it
  });
});

//404 Page
router.get("/error/404", (req, res) => {
  res.render("404");
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
