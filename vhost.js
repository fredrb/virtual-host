/* ROUTE subdomain to any of the files located in apps folder */
var connect = require('connect');
var vhost = require('vhost');

var app = connect();

// use OS variables to find where the apps are located

app.use(vhost('gba.atcore.co', require(process.env.GBA_APP).app);
app.use(vhost('chat.atcore.co', require(process.env.CHAT_APP).app));
app.use(vhost('atcore.co', require(process.env.CHAT_APP).app));

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Server started on port " + port);
})
