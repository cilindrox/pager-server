var express = require('express');
var router = express.Router();
var visitsHelper = require('../src/helpers/visits');

var url = process.env.ENDPOINT_URL;

// FUGLY HACK: I'm doing this so as not to introduce an extra jwt dependency.
// Also, using a single space (' ') instead of \s for the regex.
function parseToken(headers) {
  return headers.authorization.split(/Bearer /i)[1];
}

/* GET visits listing. */
router.get('/', function(req, res) {
  var token = parseToken(req.headers);

  // FIXME(gfestari):This call simply takes too long for promises to complete.
  // visitsHelper.getVisits(url + '/visits', token, function(err, data) {
  //   if (err) { return; }
  //   res.json(data);
  // });

  visitsHelper.queryApi(url + '/visits', token, 1, function(data) {
    res.json(data.body);
  });

});

module.exports = router;
