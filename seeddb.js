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
    "Create Table fac_awards(id varchar(255), category varchar(255),department varchar(255), filterDate Date, level varchar(255), eventName varchar(255), awardedBy varchar(255), status varchar(255), date Date, description text, COE varchar(255))";
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
    "Create Table fac_clubActivities(clubName varchar(255), topic varchar(255), department varchar(255), filterDate Date, resourcePerson varchar(255), designation varchar(255), company varchar(255), objective text, benefits text, participantNo varchar(255), website varchar(255), startDate Date, endDate Date, sem varchar(255), COE varchar(255), description text)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Club Activities Table created successfully");
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
