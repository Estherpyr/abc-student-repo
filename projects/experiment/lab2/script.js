let button= window.document.getElementById("button");
console.log(button);
let sw = screen.width;
let sh = screen.height;


function openWindow(){
  console.log("now a window should open");
  let randomX = Math.random()*(sw-400);
  let randomY = Math.random()*(sh-400);
  let specs = "width=200, height=100, left="+randomX+", top="+randomY;
  console.log(specs);
  let newWindow= window.open("","",specs);
  // make the new window
  setTimeout(function(){
    newWindow.close();
  },2000);



  // or set up another popup.html, put the "popup.html" in the first ""
}
function openManyWindows(){
  for(let i= 0;i<5; i++){
    openWindow();
  }
}

button.addEventListener("click",openWindow)
