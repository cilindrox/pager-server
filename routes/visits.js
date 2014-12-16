var express = require('express');
var router = express.Router();
var visitsHelper = require('../src/helpers/visits');

// TODO(gfestari): remove this
var visits = require('../public/visits.json');

var url = process.env.ENDPOINT_URL;

/* GET visits listing. */
router.get('/', function(req, res) {
  // FUGLY HACK: I'm doing this so as not to introduce an extra jwt dependency.
  // Also, using a single space (' ') instead of \s for the regex.
  var token = req.headers.authorization.split(/Bearer /i)[1];

  // FIXME(gfestari):This call simply takes too long for promises to complete.
  // visitsHelper(url + '/visits', token, function(err, data) {
  //   if (err) { return; }
  //   res.json(data);
  // });

  res.json(visits);
});

module.exports = router;
