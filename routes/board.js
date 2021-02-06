var express = require('express');
var db = require("../config/db");
var router = express.Router();

router.get('/qna', function(req,res,next){
    res.render("board/board_QnA",{user_id: req.session.user_id});
});
router.get('/free', function(req,res,next){
    res.render("board/board_free",{user_id: req.session.user_id});
});
router.get('/notice', function(req,res,next){
    res.render("board/board_Notice",{user_id: req.session.user_id});
});
router.get('/email', function(req,res,next){
    res.render("board/board_Email",{user_id: req.session.user_id});
});
module.exports = router;
