var express = require('express');
var router = express.Router();
var db = require("../config/db");


router.get('/', function (req, res, next) {
    res.render('login/login', { user_id: req.session.user_id });
    //res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
    //HASHING
    var bkfd2Password = require("pbkdf2-password");
    var hasher = bkfd2Password();

    db.query(`select * from ${process.env.userTableName} where id="${req.body.id}"`, function (error, db_value) {
        if (error) {
            throw error;
        }
        try{
            console.log(req.session.user_uid )
            if (db_value[0].id === req.body.id) {
                hasher({ password: req.body.pw, salt: db_value[0].salt }, (err, pass, salt, hash) => {
                    if (hash === db_value[0].pw) {
                        req.session.user_id = db_value[0].id;
                        res.redirect('/');
                    }else{
                        res.send('<script> alert("비밀번호를 확인하세요!"); location.href="/login" </script>');
                    }
                    
                });
            }
        }catch(e){
            res.send('<script> alert("존재하지 않는 아이디입니다."); location.href="/login" </script>');
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
