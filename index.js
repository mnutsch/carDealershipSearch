var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.use('/', express.static(__dirname + '/public/'));

var port = 8080;
console.log('listening on port: ' + 8080)
app.listen(8080);
