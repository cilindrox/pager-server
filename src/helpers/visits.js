var request = require('superagent');
var async = require('async');

var queryApi = function(url, token, page, callback) {
  request
    .get(url)
    .query({ page: page })
    .set('Authorization', 'Bearer ' + token)
    .set('Accept', 'application/json')
    .end(callback);
};

// Since total amount of records is initally unknown, we poll the first result.
// This might have a huge overhead, but it's the best I could think of.
var getPageAmount = function(url, token, callback) {
  queryApi(url, token, 1, function(res) {
    // we'll repeat the first call (page=1), otherwise we'll be missing some results.
    // TODO: validate response (401 unauth)
    console.log('PAGE_AMNT', res.body);
    callback(res.body.meta.pagination.pages || 0);
  });
};

// Compose the array of functions to be queried via async
var createParallels = function(url, token, pages, callback) {
  var callables = [];
  for (var i = 1; i <= pages; i++) {
    callables.push(
      (function(iCopy) {
        return function(callback) {
          queryApi(url, token, iCopy, function(res){
            callback(null, res.body.visits);
          });
        };
      })(i)
    );
  }
  return callback(callables);
};

var getVisits = function(url, token, cb) {
  getPageAmount(url, token, function(pages) {
    createParallels(url, token, pages, function(callables) {
      async.parallel(callables,
      function(err, results){
          var merged = [];
          merged = merged.concat.apply(merged, results);
          cb(merged);
      });
    });
  });
};

module.exports = getVisits;
