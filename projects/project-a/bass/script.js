let range= document.getElementById("myRange");
let valueField= document.getElementById("myValue");
console.log("range", range);


function inputHappened(){
  console.log("what's input?");
  valueField.innerHTML = range.value;
  // valueField.style.marginLeft = range.value + "px";

}

range.addEventListener("input", inputHappened)

// hold the command and change all "change" into "input"
