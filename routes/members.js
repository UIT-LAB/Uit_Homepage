var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {//members info
    res.render('members/members_Index');
});

module.exports = router;
