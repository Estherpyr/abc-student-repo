var app = require('express')();
var http = require('http').createServer(app);
//http 是一个inbuilt library所以不用install
var io = require('socket.io')(http);

//var startExpress = requre('express');
//var app = startExpress();换了一种写法

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//eventlistener for new socket connections
//requested by browser
// run once when a people connetc
io.on('connection', (socket) => {

  console.log('a user connected',socket.id);
  console.log('---');

  socket.on('disconnected'(){
    console.log('user disconnected');
    console.log('---')
  })

});


http.listen(3000, () => {
  console.log('listening on *:3000');
});
