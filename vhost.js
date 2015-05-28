/* ROUTE subdomain to any of the files located in apps folder */
var connect = require('connect');
var vhost = require('vhost');

var app = connect();

var express = require('express');

var app1 = express();
app1.get('/', function(req, res){
  res.end('This is app 1');
});

var app2 = express();
app2.get('/', function(req, res){
  res.end('This is app 2');
})

// use OS variables to find where the apps are located

// app.use(vhost('gba.atcore.co', require(process.env.GBA_APP).app));
// app.use(vhost('chat.atcore.co', require(process.env.CHAT_APP).app));
// app.use(vhost('atcore.co', require(process.env.CHAT_APP).app));


app.use(vhost('app1.atcore.co', app1));
app.use(vhost('app2.atcore.co', app2));

app.use(vhost('atcore.co', app1));

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Server started on port " + port);
})
