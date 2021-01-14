let players = [];
let scores
let ballInfo
//print scores
let redScore = document.getElementById('red');
let blueScore = document.getElementById('blue');
let ball = document.getElementById('ball');

// the field
let ballX
let ballY
let ballSpdX
let ballSpdY
let paddleWidth
let playerX
let playerY

let socket = io();

let canvasW
let canvasH

function setup() {
  canvasW = document.getElementById('canvasContainer').offsetWidth;
  canvasH = document.getElementById('canvasContainer').offsetHeight;
  let myCanvas = createCanvas(canvasW, canvasH);
  myCanvas.parent('canvasContainer');
  paddleWidth = 40;
  frameRate(10);
  // image(img, ballX, ballY);
}

function draw() {
  field();
  // keyPressed();
  render();
}

function field() {
  fill(255, 204, 0)
  noStroke()
  rect(0, 0, 1000, 800) //background yellow part

  fill(0)
  noStroke()
  rect(100, 120, 800, 550) //black background

  fill(92, 214, 92)
  noStroke()
  rect(200, 200, 600, 400) // field
  fill(255)
  rect(495, 200, 10, 400) //中线

  stroke(255);
  strokeWeight(10);
  noFill()
  circle(500, 400, 100)
}

//playerY
function keyPressed(){
  console.log("test")
  if(keyIsPressed === true){
      if (keyCode === UP_ARROW) {
        // socket.emit("message",{index: role, message:"the key is up"})
        socket.emit("keyup",{index: role})

      } else if (keyCode === DOWN_ARROW) {
        socket.emit("keydown",{index: role})
      }
    }
}

socket.on("gameData", (data) => {
    players = data.players;
    ballInfo = data.ball;
    scores= data.scores;
  })

function render() {
    //render ball postions
    ball.style.top=ballInfo.ballY;
    ball.style.left=ballInfo.ballX;
      //players postions
      //put the players in the draw loop
    for(let i = 0; i < players.length; i++) {
        noStroke();
        if (players[i].team=="red") {
          fill(255, 0,0)
        }else if (players[i].team=="blue") {
          fill(0,0,255);
        }
        rect(players[i].x-5, players[i].y-25, 20, 100);
      }
      //score
      redScore.innerHTML=scores.redTeam;
      blueScore.innerHTML=scores.blueTeam;
     }




  // function goal() {
  //   if (ballX > width * 2 / 5 && ballX < width * 3 / 5 && ballY < 1) {
  //     redScore += 1;
  //   }
  //   if (ballY >= 500 - 50 && ballX > width * 2 / 5 && ballX < width * 3 / 5) {
  //     blueScore += 1;
  //   }
  // }


  // function player1() {
  //   fill('rgb(255,0,0)');
  //   socket.on('playerPositions',(data)=>{
  //   if (data.role=="0") {
  //     rect(100, data.mouseY, 10, 50 );
  //   }
  //   })
  // }
  // function player2() {
  //   fill('blue');
  //   socket.on('playerPositions',(data)=>{
  //   if (data.role=="1") {
  //     rect(200, data.mouseY, 10, 50 );
  //   }
  // })
  // }
  // function player3() {
  //   fill('red');
  //   socket.on('playerPositions',(data)=>{
  //   if (data.role=="2") {
  //     rect(300, data.mouseY, 10, 50 );
  //   }
  // })
  // }
  // function player4() {
  //   fill('blue');
  //   socket.on('playerPositions',(data)=>{
  //   if (data.role=="3") {
  //     rect(400, data.mouseY, 10, 50 );
  //   }
  // })
  // }
  // function player5() {
  //   fill('red');
  //   socket.on('playerPositions',(data)=>{
  //   if (data.role=="4") {
  //     rect(600, data.mouseY, 10, 50 );
  //   }
  // })
  // }
  // function player6() {
  //   fill('blue');
  //   socket.on('playerPositions',(data)=>{
  //   if (data.role=="5") {
  //     rect(700, data.mouseY, 10, 50 );
  //   }
  // })
  // }
  // function player7() {
  //   fill('red');
  //   socket.on('playerPositions',(data)=>{
  //   if (data.role=="6") {
  //     rect(800, data.mouseY, 10, 50 );
  //   }
  // })
  // }
  // function player8() {
  //   fill('blue');
  //   socket.on('playerPositions',(data)=>{
  //   if (data.role=="7") {
  //     rect(900, data.mouseY, 10, 50 );
  //   }
  // });
  // }
