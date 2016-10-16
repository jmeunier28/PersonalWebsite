/*

JoAnn Meunier 
Personal Website 
10/15/16

*/


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

app.get('/Resume', function(req,res){
	res.sendfile('JoAnnMeunier.html');
})



