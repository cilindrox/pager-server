var express = require('express');
var router = express.Router();

/* GET visits listing. */
router.get('/', function(req, res) {
  res.json('respond with a resource');
});

module.exports = router;
