var express = require('express');
var router = express.Router();
var fs = require('fs');

/* Get form page. */
router.get('/', function(req,res,next) {
  res.render('form', {title: 'Express'});
});

/* Post form page. */
router.post('/', function(req, res, next) {
    console.log('Got body: ', req.body);
    console.log('saving registration data');
    fs.writeFile('./testdatei.json', JSON.stringify(req.body), (err) => {
        if (err) {
            throw err;
        }
        else {
            console.log("json-datei wurde erstellt.");
            res.render('form', {title: 'Express'});
        }
    })
});

module.exports = router;