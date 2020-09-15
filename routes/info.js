var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('information', { user_id: req.session.user_id });
});

module.exports = router;
