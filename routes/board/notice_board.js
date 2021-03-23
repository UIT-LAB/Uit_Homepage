var express = require('express');
var db = require("../../config/db");
var router = express.Router();

router.get('/:page', function(req, res, next) {
    var page = req.params.page;
    var sql = "select uid, title, name, date_format(regdate,'%Y-%m-%d') regdate from noticeBoard";
    db.query(sql, function (err, rows) { 
        if (err) console.error("err : " + err);
        res.render('board/board_Notice', {title: '공지사항', rows:rows, user_id:req.session.user_id,rows:rows,page:page,length:rows.length-1,page_num:5,pass:true});
        console.log(rows.length-1);
    });
});
module.exports = router;
