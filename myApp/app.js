var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Express.js listening on port 3000! Visit http://192.168.33.10:3000 in your browser');
});
