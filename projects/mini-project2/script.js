let button = document.getElementById("button");
// let button2 = document.getElementById("button2");
let time = 0.01;
let centerX = screen.width/2;
let centerY = screen.height/2;
let radius = 200;

let sw = screen.width;
let sh = screen.height;

let popupWidth = 70;
let popupHeight = 70;


function createSuperClock(){
  // let today = new Date();
  // let theTime =today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // let url = theTime;
  let url = "hello/index.html";
  var numbers = [0,30,60,90,120,150,180,210,240,270,300,330];

  for (let i=0; i<numbers.length; i++){
    // draw squares in a ring centered around the middle of the window.
    var angle = numbers[i];
    console.log(angle);
    let x = centerX + Math.cos(angle) * radius;
    let y = centerY + Math.sin(angle) * radius;
    let specifications = "width="+popupWidth+", height="+popupHeight+", left="+x+", top="+y;
    let win = window.open(url, "", specifications);
    let ranTime = 8000 + Math.random()*8000;

    setTimeout(()=>{
      win.close();
    }, ranTime);
  }




}


// function randomPosition(){
//   let ranY = Math.random()*sh - 70;
//   let ranX = Math.random()*sw - 70;
//
//   win.addEventListener("load", ()=>{
//
//     let interval = setInterval(()=>{
//       x+=40;
//       if(ranX > sw-70){
//         clearInterval(interval);
//         win.close();
//       }else if(ranY> sh-70){
//         clearInterval(interval);
//         win.close();
//       }else{
//         win.moveTo(ranX, ranY);
//       }
//     }, 50)
//
//   })
// }


button.addEventListener("click", createSuperClock)
// button2.addEventListener("click", randomPosition)
