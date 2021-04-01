var express = require("express");
var moment = require("moment");
var db = require("../config/db");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  //members info
  db.query(`select * from member`, function (error, db_value) {
    if (error) {
      throw error;
    }
    res.render("members/members_Index", { moment, user_name: req.session.user_name, member: db_value,user_email:req.session.user_email});
  });
});

router.get("/schedule", function (req, res, next) {
  //members info
  db.query(`select * from schedule`, function (error, db_value) {
    if (error) {
      throw error;
    }
    res.render("members/members_Schedule", { moment, user_name: req.session.user_name, schedule_val: db_value ,user_email:req.session.user_email});
  });
});

router.get('/task', function (req, res, next) {
  res.render("members/members_task", { user_name: req.session.user_name ,user_email:req.session.user_email});
});
router.get('/pstp/:name', function (req, res, next) {
  res.render("members/members_pstp", { user_name: req.session.user_id ,user_email:req.session.user_email});
});
router.get('/timetable', function(req, res, next) {
  res.render('timetable/timetable_Index', { user_name: req.session.user_id ,user_email:req.session.user_email});
});
module.exports = router;
