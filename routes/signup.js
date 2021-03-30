var express = require('express');
var db = require('../config/db');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(res);
    res.render('login/signup', {title:'회원가입' ,user_id: req.session.user_id,user_email:req.session.user_email });
});

module.exports = router;