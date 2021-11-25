var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { // get-Request auf die Startseite
  res.render('index', { title: 'Express' });
});

module.exports = router;
