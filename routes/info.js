var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('information', {user_id: req.session.user_id, user_email: req.session.user_email});
});

module.exports = router;
