var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = 3000;

let totalPlayers
let gameStarted=false;

// let players = [];
let defaultY = 400;
let players = [
  {
    status: "inactive",
    index: 0,
    id: "",
    team: "red",
    x: 260,
    y: defaultY,
  },
  {
    status: "inactive",
    index: 1,
    id: "",
    team: "red",
    x: 380,
    y: defaultY,
  },
  {
    status: "inactive",
    index: 2,
    id: "",
    team: "red",
    x: 560,
    y: defaultY,
  },
  {
    status: "inactive",
    index: 3,
    id: "",
    team: "red",
    x: 680,
    y: defaultY,
  },
  {
    status: "inactive",
    index: 4,
    id: "",
    team: "blue",
    x: 320,
    y: defaultY,
  },
  {
    status: "inactive",
    index: 5,
    id: "",
    team: "blue",
    x: 440,
    y: defaultY,
  },
  {
    status: "inactive",
    index: 6,
    id: "",
    team: "blue",
    x: 620,
    y: defaultY,
  },
  {
    status: "inactive",
    index: 7,
    id: "",
    team: "blue",
    x: 740,
    y: defaultY,
  }
]


let ballX = 500;
let ballY = 250;
let ballSpdX = 5;
let ballSpdY = 5;

let redScore = 0;
let blueScore = 0;

app.use(express.static('public'));


setInterval(() => {
  totalPlayers=players.filter((player)=>{
    return player.status == "active";
  }).length;
  if (totalPlayers==8) {
    gameStarted=true;
  }
  ballX += ballSpdX;
  ballY += ballSpdY;
  if (ballX > 750 || ballX <= 200) {
    ballSpdX = -ballSpdX
  }
  if (ballY > 600 || ballY <= 200) {
    ballSpdY = -ballSpdY
  }
  // check if the ball touches any of the players
  for (var i = 0; i < players.length; i++) {
    if (ballX+50 >= players[i].x && ballX <= players[i].x+10 && ballY +50 >= players[i].y &&ballY <= players[i].y+50 ) {
      ballSpdY = -ballSpdY;
      ballSpdX = -ballSpdX;
    }
  }
  if (ballX <= 200) {
    redScore += 1;
  }
  if (ballX >= 800) {
    blueScore += 1;}


    io.emit('gameData', {
      ball:{
        ballX: ballX +"px",
        ballY: ballY +"px",
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
//   socket.on('disconnect',() => {
//       // let quitingPlayerIndex= players.findIndex((player)=>{
//       //   return player.id == socket.id;
//       // })
//       // console.log(quitingPlayerIndex);
//         // players[quitingPlayerIndex].id = "";
//         // players[quitingPlayerIndex].status = "inactive";
//         // players[quitingPlayerIndex].y = defaultY;
//         console.log('user disconnected '+ socket.id);
//         console.log("-----")
//         console.log(players)
//
// });
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
        socket.emit("role", {role: "none"})
      } else{
        players[availablePlayerIndex].id = socketId;
        players[availablePlayerIndex].status = "active";
        socket.join('players');
        socket.emit("role", {role:players[availablePlayerIndex].index})
      }
      console.log(players)
      console.log("-----")
    }
    if (data.message == "someone wanna watch the game") {
      socket.emit('role',{role:"audience"});
    }
});
  socket.on('keyup',(data)=>{
    console.log(data.index +"is pressing up");
    players[data.index].y -=5;
  })
  socket.on('keydown',(data)=>{
    console.log(data.index +"is pressing down");
    players[data.index].y +=5;
  })
    // when one socket is disconnected, set the player status back to inactive
    socket.on('disconnect', () => {
      console.log('user disconnected' +socket.id);
    });
})

http.listen(3010, () => {
  console.log('listening on *:' + 3010);
});
