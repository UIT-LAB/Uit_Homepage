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
module.exports = router;
