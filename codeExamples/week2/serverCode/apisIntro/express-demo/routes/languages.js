var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/languages', function(req, res, next) {
  res.send('Go is soooo much better than Rust!');
});


module.exports = router;
