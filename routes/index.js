var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rooted & Wild Floral Design by Mackenzie Myers' });
});

module.exports = router;
