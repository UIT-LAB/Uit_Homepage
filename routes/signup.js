/*var express = require('express');
var db = require('../config/db');
var router = express.Router();
var bkfd2Password = require("pbkdf2-password");
var hasher = bkfd2Password();

/* GET users listing. 
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
/*adfsljasdfjl*/

/*new Promise((resolve) => {
    return hasher({ password: pw }, async (err, pass, salt, hash) => {
        console.log("이전 salt : ", salt)
        console.log("이전 hash : ", hash)
        sallam = salt;
        old_pw = hash;
        resolve();
    });
})
.then(
    () => {
        console.log("저장된 Sallam 값 :",sallam)
        return hasher({ password: pw, salt: sallam }, (err, pass, salt, hash) => {
            console.log("\tㄴ Sallam 값 :",sallam)
            console.log("이후 salt : ", salt)
            console.log("이후 hash : ", hash)
            new_pw = hash;
        });
    }
)
setTimeout(function(){
    console.log(old_pw==new_pw); 
}, 500);*/