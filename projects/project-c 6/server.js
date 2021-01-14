var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = 3000;

let totalPlayers
let gameStarted=false;

// let players = [];
let defaultY = 350;
let players = [
  {
    status: "inactive",
    index: 0,
    id: "",
    team: "red",
    x: 126,
    y: defaultY
  },
  {
    status: "inactive",
    index: 1,
    id: "",
    team: "red",
    x: 344-10,
    y: defaultY
  },
  {
    status: "inactive",
    index: 2,
    id: "",
    team: "red",
    x: 578+10,
    y: defaultY
  },
  {
    status: "inactive",
    index: 3,
    id: "",
    team: "red",
    x: 734+10,
    y: defaultY
  },
  {
    status: "inactive",
    index: 4,
    id: "",
    team: "blue",
    x: 266-10,
    y: defaultY
  },
  {
    status: "inactive",
    index: 5,
    id: "",
    team: "blue",
    x: 422-10,
    y: defaultY
  },
  {
    status: "inactive",
    index: 6,
    id: "",
    team: "blue",
    x: 656+10,
    y: defaultY
  },
  {
    status: "inactive",
    index: 7,
    id: "",
    team: "blue",
    x: 874,
    y: defaultY
  }
]

let ballWidth=50;

let ballX = 500;
let ballY = 250;
let ballSpdX = 5;
let ballSpdY = 5;

let redScore = 0;
let blueScore = 0;

app.use(express.static('public'));

//started the game 3 secs after all players are on the field
// started from the kickoff point
// setTimeout()

//the server sending gameData every 50 milisecs
setInterval(()=>{
  totalPlayers=players.filter((player)=>{
    return player.status == "active";
  }).length;
  if (totalPlayers==8) {
    gameStarted=true;
  }
  // move the ball when the game starts
  if (gameStarted==true) {
    ballX += ballSpdX;
    ballY += ballSpdY;
    if (ballX > 1000-ballWidth|| ballX <= 0) {
      ballSpdX = -ballSpdX
    }
    if (ballY > 800-ballWidth || ballY <= 0) {
      ballSpdY = -ballSpdY
    }
  }
  // check if the ball touches any of the players
  for (var i = 0; i < players.length; i++) {
    if (ballX+ 50 >= players[i].x && ballX <= players[i].x+20 && ballY +50 >= players[i].y &&ballY <= players[i].y+100 ) {
      ballSpdY = -ballSpdY;
      ballSpdX = -ballSpdX;
    }
  }
  if (ballX <= 0 && ballY>=295 && ballY<=359) {
    redScore += 1;
  }
  if (ballX >= 1000&& ballY>=295 && ballY<=359) {
    blueScore += 1;}

  io.emit('gameData', {
      ball:{
        ballX: ballX,
        ballY: ballY,
        ballSpdX: ballSpdX,
        ballSpdY: ballSpdY
      },
      players: players,
      playerNum: totalPlayers,
      gameStarted: gameStarted,
      scores:{
        redTeam: redScore,
        blueTeam: blueScore,
      }
  })
}, 50)

  // the game data is updated every 50 miliseconds

io.on('connection', (socket) => {
  console.log('a user connected ' + socket.id);
  let socketId = socket.id;

// if someone indicated that they wanna join the game
//check if there is seat for him
  socket.on('message', (data) => {
    if (data.message == "someone wanna join the game") {
      let availablePlayerIndex = players.findIndex((player)=>{
        return player.status == "inactive"
      })
      // availablePlayer is -1 id no "inactive" player was found
      // otherwise it will return the index of the available player
      if(availablePlayerIndex == -1){
        // notify the client that the game is full
        socket.emit("role", {role: "audience"})
      }
      if (availablePlayerIndex<=3){
        socket.join('teamRed');
        players[availablePlayerIndex].id = socketId;
        players[availablePlayerIndex].status = "active";
      }
      if (availablePlayerIndex>3&&availablePlayerIndex<=7) {
        socket.join('teamBlue');
        players[availablePlayerIndex].id = socketId;
        players[availablePlayerIndex].status = "active";
      }
        socket.emit("role", {role:players[availablePlayerIndex].index})
      }
      console.log(players)
      console.log("-----")
    if (data.message == "someone wanna watch the game") {
      socket.emit('role',{role:"audience"});
    }
});
  socket.on('keyup',(data)=>{
    players[data.index].y -=5;
  })
  socket.on('keydown',(data)=>{
    players[data.index].y +=5;
  })
  // the chat message will only be sent to the same room;
  socket.on('chatMessage',(data)=>{
    console.log(data);
    if (data.role<=3) {
      io.to('teamRed').emit('chatting', data);
    }
    else if (data.role>3&&data.role<=7) {
      io.to('teamBlue').emit('chatting', data);
    }
  })
    // when one socket is disconnected, set the player status back to inactive
    //dunno why this part is not working...
    socket.on('disconnect', () => {
      // let quitPlayerIndex=players.findIndex((player)=>{
      //   return player.id == socket.id;
      // })
      // players[quitPlayerIndex].id = '';
      // players[quitPlayerIndex].status = "inactive";
      console.log('user disconnected' +socket.id);
    });
})

http.listen(port, () => {
  console.log('listening on *:' + port);
});
