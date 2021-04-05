const express = require("express");
const router = express.Router();
const connection = require("../configs/DBConnection");

function formatDate(date) { 
  let d=new Date(date), month='' + (d.getMonth() + 1), day='' + d.getDate(), year=d.getFullYear();
  if (month.length < 2) month='0' + month; if (day.length < 2)
    day='0' + day; 
  return [day, month, year].join('/'); }

const {
  ensureAuthenticated,
  forwardAuthenticated,
} = require("../configs/auth");

//Route for Student Report Generation
router.get("/students/search", ensureAuthenticated, (req, res) => {
  res.render("report/stu_search", {
    module: "Student",
    title: "",
    Username: req.user.name,
  });
});

//Route for Faculty FacReport Generation
router.get("/faculty/search", ensureAuthenticated, (req, res) => {
  res.render("report/fac_search", {
    title: "",
    module: "Faculty",
    Username: req.user.name,
  });
});

//Filter Data and Print for both Faculty & Student
router.post("/search", (req, res) => {
  console.log('inside');
  console.log(req.body)
  let module = req.body.moduleName;
  let event = "stu_" + req.body.event;
  if (module === "Faculty") {
    event = "fac_" + req.body.event;
  }
  let fromDate = req.body.fromDate;
  let toDate = req.body.toDate;
  let dept = req.body.dep.toUpperCase();
  let COE = req.body.COE;
  let eventName = req.body.event;
  eventName =
    eventName.charAt(0).toUpperCase() +
    eventName.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2");
  //All should  look for all the table in database

  if (req.body.event == "all") {
    let sql = `select table_name from information_schema.tables where table_schema="data_repository"`;
    connection.query(sql,(err,result,fields)=>{
      if(err) throw err;
      // console.log(result);
      let tables = [];
      result.forEach(res=>{
        let table = res.table_name;
        let cn = 0;
        for(let i=0;i<table.length;i++){
          if(table[i]=='_')
            cn++;
        }

        if(table[0]=='f' && cn>0){
          tables.push(table);
        }
      })
      // tables.forEach((res,i)=>{
      //   console.log(res)
      // })

      let data = []
      eventName = []
      tables.forEach((table,i)=>{
        eventName.push(
          table.charAt(4).toUpperCase() +
          table.slice(5).replace(/([a-z])([A-Z])/g, "$1 $2")
        )
        let sql = `Select * from ${table}`;
        // console.log(table)
        connection.query(sql,(err,result,fields)=>{
          if(err)  throw err;

          // console.log(result);

          let datatemp = [];
          let detailsReq = true;
          result.forEach((res) => {
            for(let key in res){
              if(key.includes('date') || key.includes('Date')){
                res[key] = formatDate(res[key])
              }
            }
            if (res.department == null) {
              res.department = "NULL";
            }
            if (req.body.details == "false") {
              delete res.description;
              detailsReq = false;
            }
            delete res.filterDate;
            if (
              (res.department == "NULL" || dept == "ALL" || res.department == dept) &&
              (COE == "All" || COE == res.COE)
            ) {
              datatemp.push(res);
            }
          });
        
        // console.log(datatemp)
        data.push(datatemp)
        if(i==tables.length-1){

          // console.log(eventName)
          if (detailsReq) {
            res.render("report/full_report", {
              module: module,
              data: data,
              event: eventName,
            });
          } else {
            res.render("report/report_without_desc", {
              module: module,
              data: data,
              event: eventName,
            });
          }
          
          // res.json({
          //   message: "All field is under development",
          // });
        }
        })
      })
      // console.log('data',data)


      

     
    })
   
    return;
  }
  let sql = `Select * from ${event} Where (filterDate BETWEEN ? AND ?)`;
  connection.query(sql, [fromDate, toDate], (err, result, fields) => {
    if (err) throw err;
    // console.log(result);
    let data = [];
    let detailsReq = true;
    result.forEach((res, i) => {
      for(let key in res){
        if(key.includes('date') || key.includes('Date')){
          res[key] = formatDate(res[key])
        }
      }
      if (res.department == null) {
        res.department = "NULL";
      }
      if (req.body.details == "false") {
        delete res.description;
        detailsReq = false;
      }
      delete res.filterDate;
      if (
        (res.department == "NULL" || dept == "ALL" || res.department == dept) &&
        (COE == "All" || COE == res.COE)
      ) {
        data.push(res);
      }
    });
    if (data.length == 0) {
      res.json({
        error: "the data is empty based on your search results",
      });
      return;
    }

    //Check for Details req

    module = [module];
    eventName = [eventName];
    console.log(module,eventName);
    data = [data]
    if (detailsReq) {
      res.render("report/full_report", {
        module: module,
        data: data,
        event: eventName,
      });
    } else {
      res.render("report/report_without_desc", {
        module: module,
        data: data,
        event: eventName,
      });
    }
  });
});

module.exports = router;
