const express = require('express');
const router = express.Router();
const connection = require("../configs/DBConnection");
router.get('admin/add-fields',(req, res)=>{ 
    console.log("hello")
    connection.query('SELECT * FROM COE',(err,rows,fields)=>{
       console.log(data);
       console.log(err);

    })
 
});
router.post('/', function(req, res, next) {
  
  const coeDetails=req.body;
 

  var sql = 'INSERT INTO COE SET ?';
  db.query(sql, coeDetails,function (err, data) { 
      if (err) throw err;
         console.log("data is inserted successfully "); 
  });
 res.redirect('/admin/admin_addUser'); 
}); 
module.exports = router;