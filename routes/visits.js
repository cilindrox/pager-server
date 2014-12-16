var express = require('express');
var router = express.Router();
var visitsHelper = require('../src/helpers/visits');
var parser = require('../src/helpers/parser.js');

var url = process.env.ENDPOINT_URL;

/* GET visits listing. */
router.get('/', function(req, res) {
  var token = parser.parse(req.headers);

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
