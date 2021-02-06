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
    res.render("members/members_Index", { moment, user_id: req.session.user_id, member: db_value});
  });
});

router.get("/schedule", function (req, res, next) {
  //members info
  db.query(`select * from schedule`, function (error, db_value) {
    if (error) {
      throw error;
    }
    res.render("members/members_Schedule", { moment, user_id: req.session.user_id, schedule_val: db_value });
  });
});

router.get('/task', function (req, res, next) {
  res.render("members/members_task", { user_id: req.session.user_id });
});

router.get('/pstp/:name', function (req, res, next) {
  res.render("members/members_pstp", { user_id: req.session.user_id });
});


module.exports = router;
