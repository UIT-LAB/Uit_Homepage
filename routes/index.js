var express = require('express');
const db = require('../config/db');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var sql = 'select title from noticeBoard thesis ORDER BY uid DESC LIMIT 3; select title from freeBoard thesis ORDER BY uid DESC LIMIT 3; select title from qnaBoard thesis ORDER BY uid DESC LIMIT 3; select snum, name,address,field from member thesis LIMIT 5';
  db.query(sql,function(err,rows){
    res.render('index', { rows: rows, user_id:req.session.user_id,user_email:req.session.user_email});
    console.log(req.session.user_id,req.session.user_email);
  });
});
module.exports = router;