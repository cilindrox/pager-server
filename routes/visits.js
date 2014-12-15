var express = require('express');
var router = express.Router();

/* GET visits listing. */
router.get('/', function(req, res) {
  var visits = [
    { lat: 37.782551, lng: -122.445368 },
    { lat: 37.782745, lng: -122.444586 },
    { lat: 37.782842, lng: -122.443688 },
    { lat: 37.782919, lng: -122.442815 },
    { lat: 37.782992, lng: -122.442112 },
    { lat: 37.783100, lng: -122.441461 },
    { lat: 37.783206, lng: -122.440829 },
    { lat: 37.783273, lng: -122.440324 },
    { lat: 37.783316, lng: -122.440023 },
    { lat: 37.783357, lng: -122.439794 },
    { lat: 37.783371, lng: -122.439687 },
    { lat: 37.783368, lng: -122.439666 },
    { lat: 37.783383, lng: -122.439594 },
    { lat: 37.783508, lng: -122.439525 },
    { lat: 37.783842, lng: -122.439591 },
    { lat: 37.784147, lng: -122.439668 },
    { lat: 37.784206, lng: -122.439686 },
    { lat: 37.784386, lng: -122.439790 },
    { lat: 37.784701, lng: -122.439902 }
  ];

  res.json(visits);
});

module.exports = router;
