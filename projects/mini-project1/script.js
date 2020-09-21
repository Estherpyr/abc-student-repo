// let number = 150;
// let radius = 2;
// let max = 800;
// createRandomNodes(100,2,800);
let num = Math.floor(Math.random()*100);
let yPos = Math.floor(Math.random()*1000);
let xPos = Math.floor(Math.random()*1200);
createRandomImage(30, 0, 0);

let clicking = document.getElementById("reset");
clicking.addEventListener("click",function(){
  createRandomImage(num, xPos, yPos);
});

function createRandomImage(num, xPos, yPos){
  let canvas = document.getElementById("myCanvas");
  let context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);

  var image= new Image();
  image.src='kendall.jpg';
  image.style.width='50px'
  image.style.height='auto';
  image.onload= function(){
    for(var i= 0; i<= num; i++){
      // content.beginPath();
      context.drawImage(image,xPos,yPos);
      // context.fill();
      // context.closePath();
    }
  }
  // let canvas= document.getElementById("myCanvas");
  // let context = canvas.getContext("2d");
  // context.clearRect(0,0, canvas.width,canvas.height);
  // for (var i = 0; i <=number; i++) {
  //       context.beginPath();
  //       var rand_x = Math.random(i) * max;
  //       var rand_y = Math.random(i) * max;
  //       context.arc(rand_x, rand_y, radius, 0, 2*Math.PI);
  //       context.fill();
  //       context.closePath();
  //     }
}
