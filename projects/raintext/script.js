let range = document.getElementById("myRange");
let contentElement = document.getElementById("content");

let text = contentElement.innerHTML;
let letters = text.split("");

let letterSpan = letters.map((letter)=>{return"<span>"+letter+"</span>"});
// let letterSpan = letters.map(function(letter){
// return "<span>"+ letter +"</span>"
// });

contentElement.innerHTML = letterSpan.join("");
let spanTags = contentElement.getElementsByTagName("span");

let randomMultipliers = letters.map((letter)=>{
  return Math.random()*5
});

range.addEventListener("input",function(){
  let sliderValue =range.value;
  for(let i=0; i<spanTags.length; i++){
    let randomMultiplier = randomMultipliers[i];
    let yPos =sliderValue*randomMultiplier;
    spanTags[i].style.top= yPos +"px";
  }
})
