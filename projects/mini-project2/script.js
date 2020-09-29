let button = document.getElementById("button");
// let button2 = document.getElementById("button2");
let time = 0.01;
let centerX = screen.width/2;
let centerY = screen.height/2;
let radius = 200;

let numSquares = 12;

let popupWidth = 50;
let popupHeight = 50;

let win;





function createSuperClock(){
  let today = new Date();
  let theTime =today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let url = theTime;
  var numbers = [0,30,60,90,120,150,180,210,240,270,300,330];

  for (let i=0; i<numbers.length; i++){
    // draw squares in a ring centered around the middle of the window.
    var angle = numbers[i];
    console.log(angle);
    let x = centerX + Math.cos(angle) * radius;
    let y = centerY + Math.sin(angle) * radius;
    let specifications = "width="+popupWidth+", height="+popupHeight+", left="+x+", top="+y;
    let win = window.open(url, "", specifications);
    let ranTime = 8000 + Math.random()*4000;

    setTimeout(()=>{
      win.close();
    }, ranTime);
  }
}




button.addEventListener("click", createSuperClock);
