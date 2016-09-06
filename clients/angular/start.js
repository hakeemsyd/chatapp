'use strict';
/* jshint node: true */

var express = require('express');
var app = express();

app.set('views', './app');
app.set('view engine', 'jade');

var port = process.env.PORT || 5000;

app.use(express.static('app'));

app.get('/', function(req, res){
  res.render('index.jade');
});

app.listen(port);
console.log("App listening on port: " + port);
