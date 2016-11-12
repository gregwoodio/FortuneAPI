// fortune_api.js

var express = require('express');

var app = express();
var port = 3113;

var sys = require('sys');
var exec = require('child_process').exec;
var child;

app.get('/fortune', function(req, res) {
  child = exec("fortune", function(err, stdout, stderr) {
    if (err) {
      res.json({
        fortune: stderr
      });
    } else {
      res.json({
        fortune: stdout
      });
    }
  });
});

//start listening
app.listen(port);
console.log("Listening on port " + port);

module.exports = app;