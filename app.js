var express = require('express');
var favicon = require('serve-favicon');
var cors = require('cors');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var visits = require('./routes/visits');

var app = express();

app.use(favicon('./public/favicon.ico', { maxAge: 31556926 }));
app.use(logger('dev'));

// Reflect the request origin as defined by `req.header('Origin')`
app.use(cors({ origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/visits', visits);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res
      .status(err.status || 500)
      .json({
        message: err.message,
        error: err
      });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res
    .status(err.status || 500)
    .json({
      message: err.message,
      error: {}
    });
});


module.exports = app;
