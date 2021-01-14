let socket = io();

let number
let role
let team
let join=document.getElementById('join');
let watch=document.getElementById('watch');
let text1=document.getElementById('text1');
let text2=document.getElementById('text2');
let landing =document.getElementById('landing');
let game = document.getElementById('game');
let memberSelection= document.getElementById('selectMember');
let message= document.getElementById('message');
let sendBtn= document.getElementById('send');
let selectionOptions =document.getElementsByTagName('option');

console.log(selectionOptions);

join.addEventListener('click',()=>{
  join.style.display="none";
  watch.style.display="none";
  socket.emit('message',{message:"someone wanna join the game"});
  text2.innerHTML="Please wait until the game starts!";
})
watch.addEventListener('click',()=>{
  join.style.display="none";
  watch.style.display="none";
  socket.emit('message',{message:"someone wanna watch the game"});
  text2.innerHTML="Please wait until the game starts!";
})

// submitBtn.addEventListener('click',()=>{
//   socket.emit('message',{message:"someone wanna join the game", name:nameValue});
//   text2.innerHTML="Please wait until the game starts!";
// })

let players = [];
let scores
let ballInfo
//print scores
let redScore = document.getElementById('red');
let blueScore = document.getElementById('blue');
let roleInfo =document.getElementById('role');

// // the field
let ballX
let ballY
let ballSpdX
let ballSpdY
// let paddleWidth
// let playerX
// let playerY

let canvasW
let canvasH

let img;


function preload() {
  img = loadImage('soccer.png');
}
function setup() {
  canvasW = document.getElementById('canvasContainer').offsetWidth;
  canvasH = document.getElementById('canvasContainer').offsetHeight;
  let myCanvas = createCanvas(canvasW, canvasH);
  myCanvas.parent('canvasContainer');
  frameRate(10);
}
function draw() {
  field();
  render();
}
function field() {
  //field
  fill(65, 170, 102)
  stroke(255);
  strokeWeight(10);
  rect(0, 0, 1000, 800)
  //midfield line
  fill(255)
  noStroke()
  rect(497.5, 0, 5, 800)
  //circle at midfield
  stroke(255);
  strokeWeight(5);
  noFill()
  circle(500, 400, 100);
  //kickoff marker
  fill(255)
  noStroke()
  circle(500,400,10);

  noFill()
  stroke(255)
  strokeWeight(5)
  rect(0, 180 , 188, 440);
  rect(812, 180, 188, 440);
  //
  // // draw the two inner goalie boxes
  rect(0, 295, 64, 210);
  rect(936, 295, 64, 210);


}
//playerY
function keyPressed(){
  if(keyIsPressed === true){
      if (keyCode === UP_ARROW) {
        // socket.emit("message",{index: role, message:"the key is up"})
        socket.emit("keyup",{index: role})

      } else if (keyCode === DOWN_ARROW) {
        socket.emit("keydown",{index: role})
      }
    }
}

//on receiving the role. the player will know which player he is
//the drop down menu of message is different for each of them
socket.on('role',(data)=>{
  console.log(data);
  role=data.role;
  if (role<=3) {
    team="red";
    roleInfo.style.color="red";
    roleInfo.innerHTML="No."+role;
  }else if (role>3 &&role<=7) {
    team="blue";
    roleInfo.style.color="blue";
    roleInfo.innerHTML="No." +role;
  }
  if (role==1) {
    selectionOptions[1].innerHTML="RED 0";
  }
  if (role==2) {
    selectionOptions[1].innerHTML="RED 0";
    selectionOptions[2].innerHTML="RED 1";
  }
  if (role==3) {
    selectionOptions[1].innerHTML="RED 0";
    selectionOptions[2].innerHTML="RED 1";
    selectionOptions[3].innerHTML="RED 2";
  }
  if (role==4) {
    selectionOptions[1].innerHTML="BLUE 5";
    selectionOptions[2].innerHTML="BLUE 6";
    selectionOptions[3].innerHTML="BLUE 7";}
  if (role==5) {
    selectionOptions[1].innerHTML="BLUE 4";
    selectionOptions[2].innerHTML="BLUE 6";
    selectionOptions[3].innerHTML="BLUE 7";
  }
  if (role==6) {
    selectionOptions[1].innerHTML="BLUE 4";
    selectionOptions[2].innerHTML="BLUE 5";
    selectionOptions[3].innerHTML="BLUE 7";
  }
  if (role==7) {
    selectionOptions[1].innerHTML="BLUE 4";
    selectionOptions[2].innerHTML="BLUE 5";
    selectionOptions[3].innerHTML="BLUE 6";
  }
})


//live chatting messaging
//only among the same team member
//aka two different chatrooms at the same time

 sendBtn.addEventListener('click',()=>{
       let selection=memberSelection.value;
       let messageText=message.value;
       let messageInfo={
         role:role,
         member:selection,
         message:messageText,
       }
       socket.emit('chatMessage',messageInfo);
       console.log(messageInfo);
       message.value="";
     })
//players can only see messages from the same team
socket.on('chatting',(data)=>{
  console.log(data);
})
socket.on("gameData", (data) => {
    players = data.players;
    ballInfo = data.ball;
    scores= data.scores;
    number=data.playerNum;
    text1.innerHTML="Currently "+number+ " people are waiting.";
    if (data.gameStarted==true) {
      text1.style.display="hidden";
      text2.innerHTML="The game will start soon!";
      setTimeout(()=>{
        landing.style.display="none";
        game.style.display="flex";
      },3000);
    }
  })

function render() {
    //render ball postions
      ballX=ballInfo.ballX;
      ballY=ballInfo.ballY;
      ballSpdX=ballInfo.ballSpdX;
      ballSpdY=ballInfo.ballSpdY;

      image(img, ballX, ballY,50,50);
      //players postions
      //put the players in the draw loop
    for(let i = 0; i < players.length; i++) {
        noStroke();
        if (players[i].team=="red") {
          fill(255, 0,0)
        }else if (players[i].team=="blue") {
          fill(0,0,255);
        }
        rect(players[i].x-5, players[i].y, 20, 100);
      }
      //score
      redScore.innerHTML=scores.redTeam;
      blueScore.innerHTML=scores.blueTeam;
     }
