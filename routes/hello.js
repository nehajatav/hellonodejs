var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/world', function(req, res, next) {
  res.send('hello world nodejs');
});

module.exports = router;
