var express = require('express')
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  });

  socket.on('message', (data) => {
    console.log('message: ' + data);
    io.emit("incoming", data);
  })
});

http.listen(3010, () => {
  console.log('listening on *:3010');
});
