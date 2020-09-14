var express = require("express");
var moment = require("moment");
var db = require("../config/db");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  //members info
  db.query(`select * from ${process.env.memberTableName}`, function (error, db_value) {
    if (error) {
      throw error;
    }
    res.render("members/members_Index", { moment, member: db_value });
  });
});

router.get("/schedule", function (req, res, next) {
  //members info
  db.query(`select * from ${process.env.scheduleTableName}`, function (error, db_value) {
    if (error) {
      throw error;
    }
    res.render("members/members_Schedule", { moment, schedule_val: db_value });
  });
});
module.exports = router;
