const express = require("express");
const router = express.Router();
const connection = require("../configs/DBConnection");

router.get("/", (req, res) => {
  res.render("home", {
    Username: "test",
  });
});

//Faculty Routes

router.get("/faculty/eventsAttended", (req, res) => {
  res.render("fields/fac_eventsAttended", {
    title: "Events",
    module: "Faculty",
    Username: "test",
  });
});

// Faculty Club Activities Page
router.get("/faculty/clubActivities", (req, res) => {
  res.render("fields/fac_clubActivities", {
    title: "Club",
    module: "Faculty",
    Username: "test",
  });
});

// Faculty Awards Page
router.get("/faculty/awards", (req, res) => {
  res.render("fields/fac_awards", {
    title: "Awards",
    module: "Faculty",
    Username: "test",
  });
});

//Student Routes

router.get("/students/eventsAttended", (req, res) => {
  res.render("fields/stu_eventsAttended", {
    title: "Events",
    module: "Student",
    Username: "test",
  });
});

router.get("/students/awards", (req, res) => {
  res.render("fields/stu_awards", {
    title: "Awards",
    module: "Student",
    Username: "test",
  });
});

router.get("/students/placement", (req, res) => {
  res.render("fields/stu_placement", {
    title: "Placement",
    module: "Student",
    Username: "test",
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
