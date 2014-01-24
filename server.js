'use strict';

// Module dependencies.
var express = require('express'),
    path = require('path');

var app = express();

// Express Configuration
app.configure('development', function(){
  app.use(require('connect-livereload')());
  app.use(function(req, res, next){
	  console.log(req.url);
	  next();
	});
  app.use(express.errorHandler());
});


app.configure(function(){
  app.use(app.router);
});

app.use(express.static('/'));

// Start server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});