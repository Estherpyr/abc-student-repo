// let number = 150;
// let radius = 2;
// let max = 800;
// createRandomNodes(100,2,800);
let num = 30;
let yPos = 0;
let xPos = 0;
createRandomImage(30, 0, 0);

let clicking = document.getElementById("reset");
clicking.addEventListener("click",function(){
  createRandomImage(num, xPos, yPos);
});

function createRandomImage(num, xPos, yPos){
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);

  var added = Math.floor(Math.random(num)*10);
  num+=added;

  for(var i= 0; i<= num; i++){
    var image= new Image();
    image.src='2.JPG';
    image.style.width='30px'
    image.style.height='30px';
    let random_yPos = Math.floor(Math.random(yPos)*1000);
    let random_xPos = Math.floor(Math.random(xPos)*1000);
    context.drawImage(image,random_xPos,random_yPos);

    document.body.appendChild(image);
   }
   // }
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
