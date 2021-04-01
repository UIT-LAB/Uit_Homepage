var express = require('express');
var router = express.Router();
var db = require("../config/db");
var bkfd2Password = require("pbkdf2-password");
var hasher = bkfd2Password();

router.get('/', function (req, res, next) {
    res.render('login/login', { user_name:req.session.user_name});
    //res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
    //HASHING
    db.query(`select * from user_data where email="${req.body.email}"`, function (error, db_value) {
        console.log(db_value)
        if (error) {
            throw error;
        }
        try{
            if (db_value[0].email === req.body.email) {
                hasher({ password:req.body.pw, salt: db_value[0].salt }, async(err, pass, salt, hash)=>{
                    console.log(req.body.pw)
                    console.log(hash)
                    console.log(db_value[0].pw)
                    console.log(salt)
                    console.log(db_value[0].salt)
                    if (hash === db_value[0].pw) {
                        req.session.user_name = db_value[0].name;
                        req.session.user_email = db_value[0].email;
                        res.redirect('/');
                    }else{
                        res.send('<script> alert("비밀번호를 확인하세요!"); location.href="/login" </script>');
                    }
                });
            }
        }catch(e){
            res.send('<script> alert("존재하지 않는 이메일입니다."); location.href="/login" </script>');
        }
        
    });
});





router.get('/out', function (req, res, next) {
    req.session.destroy(function(err) {
        req.session;
    })
    res.redirect('/');
    //res.render('index', { title: 'Express' });
});
module.exports = router;
