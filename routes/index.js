const express = require("express");
const router = express.Router();
const connection = require("../configs/DBConnection");
const {
  ensureAuthenticated,
  forwardAuthenticated,
} = require("../configs/auth");
const multer = require("multer");

router.get("/", ensureAuthenticated, (req, res) => {
  res.render("home", {
    Username: req.user.name,
  });
});

//Faculty Routes

router.get("/faculty/eventsAttended", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_eventsAttended", {
    title: "Events",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty Club Activities Page
router.get("/faculty/clubActivities", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_clubActivities", {
    title: "Club",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty Awards Page
router.get("/faculty/awards", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_awards", {
    title: "Awards",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty NSS and NCC Page
router.get("/faculty/awardsnss&ncc", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_awardsNSS&NCC", {
    title: "NSS And NCC",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty Academia Industry Connect Activity Attended Page
router.get("/faculty/AICAattended", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_AcademiaIndustryConnectActivityAttended", {
    title: "Academia Industry Connect Activity Attended",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty Academia Industry Connect Activity Organised Page
router.get("/faculty/AICAorganised", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_AcademiaIndustryConnectActivityOrganised", {
    title: "Academia Industry Connect Activity Organised",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty Book Publications Page
router.get("/faculty/bookpublications", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_BookPublications", {
    title: "Book Publications",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty Consultancy Page
router.get("/faculty/consultancy", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_consultancy", {
    title: "Consultancy",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty EE&C Page
router.get("/faculty/EE&C", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_EE&C", {
    title: "EE&C",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty Enterprenuership Details Page
router.get(
  "/faculty/entrepreneurshipdetails",
  ensureAuthenticated,
  (req, res) => {
    res.render("fields/fac_entrepreneurshipDetails", {
      title: "Enterprenuership Details",
      module: "Faculty",
      Username: req.user.name,
    });
  }
);

// Faculty Faculty Served As Page
router.get("/faculty/facultyservedas", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_FacultyServedas", {
    title: "Faculty Served As",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty FOSS Cell Page
router.get("/faculty/fosscell", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_FOSScell", {
    title: "FOSS Cell",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty Idea Repository Page
router.get("/faculty/idearepository", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_ideaRepository", {
    title: "Idea Repository",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty Industry Connect Database Page
router.get(
  "/faculty/industryconnectdatabase",
  ensureAuthenticated,
  (req, res) => {
    res.render("fields/fac_IndustryConnectDatabase", {
      title: "Industry Connect Database",
      module: "Faculty",
      Username: req.user.name,
    });
  }
);

// Faculty Internship Cell Page
router.get("/faculty/internshipcell", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_InternshipCell", {
    title: "Internship Cell",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty IQAC Data Page
router.get("/faculty/IQACdata", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_IQACdata", {
    title: "IQAC Data",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty Journal Paper Publication Page
router.get(
  "/faculty/journalpaperpublication",
  ensureAuthenticated,
  (req, res) => {
    res.render("fields/fac_JournalPaperPublication", {
      title: "Journal Paper Publication",
      module: "Faculty",
      Username: req.user.name,
    });
  }
);

// Faculty MOOC Course Page
router.get("/faculty/MOOCcourse", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_MOOCcourse", {
    title: "MOOC Course",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty MOUs Page
router.get("/faculty/Mous", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_MoUs", {
    title: "MOUs",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty Patent Page
router.get("/faculty/patent", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_patent", {
    title: "Patent",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty PHD Details Page
router.get("/faculty/phddetails", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_PhdDetails", {
    title: "PHD Details",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty Professional Bodies Page
router.get("/faculty/professionalbodies", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_ProfessionalBodies", {
    title: "Professional Bodies",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty Results Page
router.get("/faculty/results", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_Results", {
    title: "Results",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty Slow Learner Initiative Page
router.get(
  "/faculty/slowlearnerinitiative",
  ensureAuthenticated,
  (req, res) => {
    res.render("fields/fac_slowlearnerinitiative", {
      title: "Slow Learner Initiative",
      module: "Faculty",
      Username: req.user.name,
    });
  }
);

// Faculty Sponsored Research Projects Page
router.get(
  "/faculty/sponsoredresearchprojects",
  ensureAuthenticated,
  (req, res) => {
    res.render("fields/fac_SponsoredResearchProjects", {
      title: "Sponsored Research Projects",
      module: "Faculty",
      Username: req.user.name,
    });
  }
);

// Faculty Tech Talk Page
router.get("/faculty/techtalk", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_techtalk", {
    title: "Tech Talk",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty Visitors Database Page
router.get("/faculty/visitorsdatabase", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_VisitorsDatabase", {
    title: "Visitors Database",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty VVIP Page
router.get("/faculty/VVIP", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_VVIP", {
    title: "VVIP",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty Well Being Club Page
router.get("/faculty/wellbeingclub", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_WellBeingClub", {
    title: "Well Being Club",
    module: "Faculty",
    Username: req.user.name,
  });
});

//Student Routes

router.get("/students/eventsAttended", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_eventsAttended", {
    title: "Events",
    module: "Student",
    Username: req.user.name,
  });
});

router.get("/students/awards", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_awards", {
    title: "Awards",
    module: "Student",
    Username: req.user.name,
  });
});

router.get("/students/placement", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_placement", {
    title: "Placement",
    module: "Student",
    Username: req.user.name,
  });
});

//Get COE Route

router.get("/coe", ensureAuthenticated, (req, res) => {
  let data = [];
  let sql = `Select * from COE`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    const results = Object.values(JSON.parse(JSON.stringify(result)));
    res.send(results);
    //Filter out the result
    //Get request to fetch
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
