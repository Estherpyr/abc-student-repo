let xPos=10;
let yPos=20;
changeImagePos(10,20);

let clicking = document.getElementById("reset");
clicking.addEventListener("click",function(){
  changeImagePos(xPos,yPos);
});


function changeImagePos(xPos,yPos){
  let random_xPos1 = Math.floor(Math.random() * Math.floor(500));
  let random_yPos1 = Math.floor(Math.random() * Math.floor(1000));;

  document.getElementById("myPic1").style.left = random_xPos1+"px";
  document.getElementById("myPic1").style.top = random_yPos1+"px";

  let random_xPos2 = Math.floor(Math.random() * Math.floor(600));
  let random_yPos2 = Math.floor(Math.random() * Math.floor(1300));;

  document.getElementById("myPic2").style.left = random_xPos2+"px";
  document.getElementById("myPic2").style.top = random_yPos2+"px";

  let random_xPos3 = Math.floor(Math.random() * Math.floor(300));
  let random_yPos3 = Math.floor(Math.random() * Math.floor(600));;

  document.getElementById("myPic3").style.left = random_xPos3+"px";
  document.getElementById("myPic3").style.top = random_yPos3+"px";

  let random_xPos4 = Math.floor(Math.random() * Math.floor(900));
  let random_yPos4 = Math.floor(Math.random() * Math.floor(600));;

  document.getElementById("myPic4").style.left = random_xPos4+"px";
  document.getElementById("myPic4").style.top = random_yPos4+"px";

  let random_xPos5 = Math.floor(Math.random() * Math.floor(400));
  let random_yPos5 = Math.floor(Math.random() * Math.floor(700));;

  document.getElementById("myPic5").style.left = random_xPos5+"px";
  document.getElementById("myPic5").style.top = random_yPos5+"px";

  let random_xPos6 = Math.floor(Math.random() * Math.floor(800));
  let random_yPos6 = Math.floor(Math.random() * Math.floor(1000));;

  document.getElementById("myPic6").style.left = random_xPos6+"px";
  document.getElementById("myPic6").style.top = random_yPos6+"px";

  let random_xPos7 = Math.floor(Math.random() * Math.floor(800));
  let random_yPos7 = Math.floor(Math.random() * Math.floor(1000));;

  document.getElementById("myPic7").style.left = random_xPos7+"px";
  document.getElementById("myPic7").style.top = random_yPos7+"px";

  let random_xPos8 = Math.floor(Math.random() * Math.floor(800));
  let random_yPos8 = Math.floor(Math.random() * Math.floor(1000));;

  document.getElementById("myPic8").style.left = random_xPos8+"px";
  document.getElementById("myPic8").style.top = random_yPos8+"px";






}
