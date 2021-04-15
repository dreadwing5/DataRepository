const mysql = require("mysql");

let seeddb = async () => {
  let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
  });

  let promise = new Promise((resolve, reject) => {
    let sql = "Create Database data_repository";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log("DataBase Created Successfully");
      resolve("done");
    });
  });
  let res = await promise;

  promise = new Promise((resolve, reject) => {
    let db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "data_repository",
    });
    resolve(db);
  });
  db = await promise;

  sql =
    "Create Table faculty(id varchar(255), password varchar(255), name varchar(255), department varchar(255), mailId varchar(255), phoneNumber varchar(255), joiningDate Date, primary key (id), role varchar(255))";

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Faculty Table created successfully");
  });

  sql =
    "Create Table fac_awards(id varchar(255), category varchar(255),department varchar(255), filterDate Date, level varchar(255), eventName varchar(255), awardedBy varchar(255),sem varchar(255), result varchar(255), status varchar(255), date Date, description text, COE varchar(255))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Awards Table created successfully");
  });

  sql =
    "Create Table fac_eventsAttended(id varchar(255), activityType varchar(255),department varchar(255), filterDate Date, topic varchar(255), attendedAt varchar(255), activityName varchar(255), objective text, benefits text, startDate Date, endDate Date, level varchar(255), description text, COE varchar(255))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Events Attended Table created successfully");
  });

  sql =
    "Create Table fac_clubActivities(id varchar(255), clubName varchar(255), topic varchar(255), department varchar(255), filterDate Date, resourcePerson varchar(255), designation varchar(255), company varchar(255), objective text, benefits text, participantNo varchar(255), website varchar(255), startDate Date, endDate Date, sem varchar(255), COE varchar(255), description text)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Club Activities Table created successfully");
  });

  sql =
    "Create Table fac_BookPublications(id varchar(255), rc-id varchar(255), PublisherName varchar(255), BookName varchar(255), isbn varchar(255), volumeNumber varchar(255), doi varchar(255),Date Date, COE varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Book Publications Table created successfully");
  });

  sql =
    "Create Table fac_IndustryConnectDatabase(id varchar(255), Name varchar(255), CompanyName varchar(255), Address text, MobileNumber varchar(255), email varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Industry Connect Database Table created successfully");
  });

  sql =
    "Create Table fac_AcademiaIndustryConnectActivityAttended(id varchar(255), topic varchar(255),attendedAt varchar(255), activityName varchar(255), startDate Date, awardedDate Date, objectives text, benefit text, activityType varchar(255), level varchar(255), COE varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Academia Industry Connect Activity Attended Table created successfully");
  });

  sql =
    "Create Table fac_AcademiaIndustryConnectActivityOrganised(id varchar(255), topic varchar(255), duration varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, resourcePerson varchar(255), designation varchar(255), expenditure varchar(255), fundedBy varchar(255), participantsNum varchar(255), objectives varchar(255), benefit varchar(255), semester varchar(255), activityType varchar(255), level varchar(255), COE varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Academia Industry Connect Activity Organised Table created successfully");
  });

  sql =
    "Create Table fac_awardsNSSandNCC(id varchar(255), date Date, category varchar(255), level varchar(255),result varchar(255), COE varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Academia Awards NSS And NCC Table created successfully");
  });

  sql =
    "Create Table fac_consultancy(id varchar(255), NameofPI varchar(255), COtoPI varchar(255), sanctionedDate Date,grantDate Date, duration varchar(255), topic varchar(255), amount varchar(255), objectives text, benefit text, AgencyName varchar(255), level varchar(255), COE varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Consultancy Table created successfully");
  }); 
  
  sql =
    "Create Table fac_entrepreneurshipDetails(id varchar(255), CompanyName varchar(255), CompanyAddress varchar(255), establishmentDate Date, revenue varchar(255), objectives text, benefit text, Companytype varchar(255), COE varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Entrepreneurship Details Table created successfully");
  }); 

  sql =
    "Create Table fac_FOSScell(id varchar(255), eventName varchar(255), duration varchar(255), topic varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, resourcePerson varchar(255), designation varchar(255), expenditure varchar(255), fundedBy varchar(255), participantsNum varchar(255), activityType varchar(255), level varchar(255),COE varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("FOSS Cell Table created successfully");
  }); 

  sql =
    "Create Table fac_EEandC(id varchar(255), topic varchar(255), duration varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, resourcePerson varchar(255), designation varchar(255), expenditure varchar(255), fundedBY varchar(255), participantsNum varchar(255), objectives text, benefit text, semester varchar(255), activityType varchar(255), COE varchar(255), level varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("EE&C Table created successfully");
  }); 

  sql =
    "Create Table fac_FacultyServedas(id varchar(255), college_university_name varchar(255), Eventname varchar(255), startDate Date, endDate Date, servedAs varchar(255), activityType varchar(255), COE varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Faculty Served As Table created successfully");
  }); 

  sql =
    "Create Table fac_ideaRepository(id varchar(255), ideadate Date, COE varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Idea Repository Table created successfully");
  }); 

  sql =
    "Create Table fac_IQACdata(id varchar(255), topic varchar(255), duration varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, resourcePerson varchar(255), designation varchar(255), expenditure varchar(255), fundedBy varchar(255), participantsNum varchar(255), objectives text, benefit text, semester varchar(255), activityType varchar(255),COE varchar(255), level varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("IQAC Data Table created successfully");
  }); 

  sql =
    "Create Table fac_JournalPaperPublication(id varchar(255),rc-id varchar(255),type varchar(255), PublisherName varchar(255), title varchar(255), isbn varchar(255), issn varchar(255), volumeNumber varchar(255), nameOfJournal varchar(255), COE varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Journal Paper Publication Table created successfully");
  }); 

  sql =
    "Create Table fac_MOOCcourse(id varchar(255) department varchar(255), Nameofdepartment varchar(255), duration varchar(255), status varchar(255), startdate Date, enddate Date, topic varchar(255), level varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("MOOC Course Table created successfully");
  }); 

  sql =
    "Create Table fac_MoUs(id varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, collaborationTitle varchar(255), objectives text, benefit text, level varchar(255), COE varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("MOUs Table created successfully");
  });

  sql =
    "Create Table fac_patent(id varchar(255), NameofPI varchar(255), COtoPI varchar(255), grantDate Date, submissionDate Date, duration varchar(255), topic varchar(255), submissionName varchar(255), amount varchar(255), objectives text, benefit text, AgencyName varchar(255), earning varchar(255), level varchar(255),specification varchar(255),status varchar(255),commercialised varchar(255),  COE varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Patent Table created successfully");
  });

  sql =
    "Create Table fac_PhdDetails(id varchar(255), NameofPI varchar(255), COtoPI varchar(255), sanctionedDate Date, duration varchar(255), topic varchar(255), amount varchar(255), objectives text, benefit text, AgencyName varchar(255), level varchar(255), COE varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("PHD Details Table created successfully");
  });

  sql =
    "Create Table fac_ProfessionalBodies(id varchar(255), topic varchar(255), duration varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, resourcePerson varchar(255), designation varchar(255), expenditure varchar(255), fundedBy varchar(255), participantsNum varchar(255), objectives text, benefit text, semester varchar(255), activityType varchar(255),COE varchar(255), level varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Professional Bodies Table created successfully");
  });

  sql =
    "Create Table fac_Results(id varchar(255), academicYear varchar(255), passPercentage varchar(255), fcd varchar(255), firstClass varchar(255), secondClass varchar(255), failures varchar(255), appeared varchar(255), passed varchar(255), resultDate Date, department varchar(255), sem varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Results Table created successfully");
  });

  sql =
    "Create Table fac_slowlearnerinitiative(id varchar(255), subjectName varchar(255), topic varchar(255), subjectCode varchar(255), startDate Date, endDate Date, count varchar(255),department varchar(255), activityType varchar(255), level varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Slow Learner Initiative Table created successfully");
  });

  sql =
    "Create Table fac_SponsoredResearchProjects(id varchar(255), NameofPI varchar(255), COtoPI varchar(255), sanctionDate Date, submissionDate Date,rcid varchar(255),status varchar(255), title varchar(255), proposedAmount varchar(255), durationYear varchar(255), amount varchar(255), objectives text, benefit text, AgencyName varchar(255), received varchar(255), level varchar(255), COE varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Sponsored Research Projects Table created successfully");
  });

  sql =
    "Create Table fac_techtalk(id varchar(255), topic varchar(255), date Date, description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Tech Talk Table created successfully");
  });

  sql =
    "Create Table fac_VisitorsDatabase(id varchar(255), visitorName varchar(255), number varchar(255), companyName varchar(255), address text, visitDate Date, description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Visitors Database Table created successfully");
  });

  sql =
    "Create Table fac_VVIP(id varchar(255), visitorName varchar(255), number varchar(255), companyName varchar(255), address text, visitDate Date, purpose varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("VVIP Table created successfully");
  });

  sql =
    "Create Table fac_WellBeingClub(id varchar(255), eventName varchar(255), duration varchar(255), topic varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, resourcePerson varchar(255), designation varchar(255), expenditure varchar(255), fundedBy varchar(255), participantsNum varchar(255), eventLevel varchar(255), activityType varchar(255), level varchar(255), description text, filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Well Being Club Table created successfully");
  });








  sql =
    "Create Table student(usn varchar(255), password varchar(255), name varchar(255), department varchar(255), mailId varchar(255), phoneNumber varchar(255), primary key (usn))";

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Student Table created successfully");
  });

  sql =
    "Create Table stu_awards(usn varchar(255), category varchar(255),department varchar(255), filterDate Date, level varchar(255), eventName varchar(255), awardedBy varchar(255), status varchar(255), date Date, description text, COE varchar(255))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Awards Table created successfully");
  });

  sql =
    "Create Table stu_eventsAttended(usn varchar(255), activityType varchar(255), topic varchar(255), attendedAt varchar(255), activityName varchar(255), objective text, benefits text, startDate Date, endDate Date, level varchar(255), description text, COE varchar(255),department varchar(255),filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Events Attended Table created successfully");
  });

  sql =
    "Create Table stu_placement(usn varchar(255), studentName varchar(255), companyName varchar(255), salary int(255), date Date, driveType varchar(255), companyType varchar(255), type varchar(255), description text, filterDate Date, department varchar(255),COE varchar(255));";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Placements Table created successfully");
  });
  
  sql =
    "Create Table stu_projects(usn varchar(255), studentName varchar(255), projectName varchar(255), project varchar(255), startDate Date, awardedDate Date, semester varchar(255), projectType varchar(255), prize varchar(255), description text, filterDate Date, department varchar(255),COE varchar(255));";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Projects Table created successfully");
  });
  
  sql =
    "Create Table alumni(usn varchar(255), studentName varchar(255), personalmailId varchar(225), mobileNumber varchar(225), companyName varchar(225), companymailId varchar(225), yearofJoin Date, yearofPass Date, jobLocation varchar(225));";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Alumni Table created successfully");
  });
  
  sql =
    "Create Table higherStudies(usn varchar(255), studentName varchar(255), studiestype varchar(225), description varchar(225), exams varchar(225), date Date, department varchar(255),COE varchar(255));";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Higher Studies Table created successfully");
  });
  
  sql =
    "Create Table stu_mooc(usn varchar(255), studentName varchar(255), startDate Date, endDate Date, description varchar(225), courseName varchar(225), boolExam varchar(225), department varchar(255),COE varchar(255));";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("MOOC Table created successfully");
  });
  
  sql =
    "Create Table stu_bookPublication(usn varchar(255), studentName varchar(255), description varchar(225), date Date, department varchar(255),COE varchar(255));";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Book Publication Table created successfully");
  });
  
  sql =
    "Create Table stu_journalPublication(usn varchar(255), studentName varchar(255), description varchar(225), department varchar(255),COE varchar(255));";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Journal Publication Table created successfully");
  });
  
  sql =
    "Create Table stu_exhangeProgram(usn varchar(255), studentName varchar(255),description varchar(225), startDate Date, endDate Date, department varchar(255),COE varchar(255));";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Student Exchange Program Table created successfully");
  });
};



seeddb();
