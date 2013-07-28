var fs = require('fs');
var express = require('express');
var path = require('path');

var app = express.createServer(express.logger());
console.log("__dirname" + __dirname);


app.configure( function () {
  app.use('/css', express.static(__dirname + '/css'));
  app.use('/images', express.static(__dirname + '/images'));
  app.use('/js', express.static(__dirname + '/js'));
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function (request, response) {
  var buf = fs.readFileSync("index.html");
  var mystr = buf.toString("utf-8");
  response.send(mystr);
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Listening on " + port);
});