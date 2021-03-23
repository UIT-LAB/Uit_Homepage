var express = require('express');
var db = require("../../config/db");
var router = express.Router();

router.get('/write', function(req,res,next){
    res.render('write/notice_write',{user_id: req.session.user_id});
});
router.get('/:page', function(req, res, next) {
    var page = req.params.page;
    var sql = "select uid, title, name, date_format(regdate,'%Y-%m-%d') regdate from noticeBoard thesis ORDER BY uid DESC";
    db.query(sql, function (err, rows) { 
        if (err) console.error("err : " + err);
        res.render('board/board_Notice', {title: '공지사항', rows:rows, user_id:req.session.user_id,rows:rows,page:page,length:rows.length-1,page_num:5,pass:true});
        console.log(rows.length-1);
    });
});
router.post('/write', function(req,res){
    var title = req.body.title;
    var name = req.body.name;
    var content = req.body.content;
    var passwd = req.body.passwd;
    var datas = [title,name,content,passwd];
    var sql = "insert into noticeBoard(title,name,content,regdate, passwd) values(?,?,?,now(),?)";
    db.query(sql,datas,function(err,row){
        if(err) console.error("err : " + err);
        res.redirect('/notice/1');
    })
});
module.exports = router;
