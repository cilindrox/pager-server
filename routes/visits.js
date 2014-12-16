var express = require('express');
var router = express.Router();
var helper = require('../src/helpers/visits');

var url = process.env.ENDPOINT_URL;

/* GET visits listing. */
router.get('/', function(req, res) {
  // FUGLY HACK: I'm doing this so as not to introduce an extra jwt dependency.
  // Also, using a single space (' ') instead of \s for the regex.
  var token = req.headers.authorization.split(/Bearer /i)[1];

  helper(url + '/visits', token, function(data) {
    res.json(data);
  });
});

module.exports = router;
