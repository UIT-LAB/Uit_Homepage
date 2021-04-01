var express = require('express');
var db = require('../config/db');
var router = express.Router();
var bkfd2Password = require("pbkdf2-password");
var hasher = bkfd2Password();

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log(res);
    res.render('login/signup', { title: '회원가입', user_name: req.session.user_name, user_email: req.session.user_email });
});
router.post('/', function (req, res) {
    hasher({ password: req.body.passwd }, (error, pass, salt, hash) => {
        var password = hash;
        var salt = salt;
        var name = req.body.name;
        var email = req.body.email;
        var datas = [name, password, salt, email];
        console.log(salt)
        var sql = "insert into user_data(name,pw,salt,email) values(?,?,?,?)";
        db.query(sql, datas, function (err, rows) {
            if (err) console.error("err : " + err);
            res.redirect('/login');
        })
    });
});
module.exports = router;