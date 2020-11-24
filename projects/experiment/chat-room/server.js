var express = require('express')
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//general event listener
io.on('connection', (socket) => {
  //code here is individual
  //for each connection
  console.log('a user connected');

  //for each connection we establish an event listener
  //for when that connection disconnect.
  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  });

  socket.on('message', (data) => {
    console.log('message: ' + data);
    io.emit("incoming", data);
  })
});




http.listen(3000, () => {
  console.log('listening on *:3000');
});
