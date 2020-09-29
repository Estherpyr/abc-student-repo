let button= document.getElementById("button");
let boxAngle =0;
let box= document.getElementById("box");
let buttonAngle=0;

button.addEventListener("click", ()=>{
  boxAngle= boxAngle + 360;
  box.style.tranform="rotate("+boxAngle+"deg)";
})

button.addEventListener("click", ()=>{
  buttonAngle= buttonAngle + 360;
  box.style.tranform="rotate("+buttonAngle+"deg)";
})
