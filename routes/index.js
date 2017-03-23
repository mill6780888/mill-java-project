var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main.js', function(req, res, next) {
  res.render('index', { title: 'Mill' });
});

module.exports = router;
