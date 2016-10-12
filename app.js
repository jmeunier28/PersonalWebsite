var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// var socket = io();

http.listen(3000, function() {
  console.log('Listening on port 3000');
});
//
// Look in the Public directory for all the css images and js files.
app.use('/', express.static(__dirname + '/Public'));


app.get('/', function(req, res) {
  res.sendfile('index.html');
});



//So basically when i do app.use(/......'/Public') now the the / points to the /Public directory so when i request for localhost:3000/
// the / actually translates to /Public. so even in the html file when i link the css file i need not write /public/.. i can just do /...
