let drumRange= document.getElementById("myDrumRange");
let drumValueField= document.getElementById("myDrumValue");


function drumHappened(){
  console.log("what's input?");
  drumValueField.innerHTML = drumRange.value;
  // valueField.style.marginLeft = range.value + "px";
}

drumRange.addEventListener("input", drumHappened)

// hold the command and change all "change" into "input"


let guitarRange= document.getElementById("myGuitarRange");
let guitarValueField= document.getElementById("myGuitarValue");


function guitarHappened(){
  console.log("what's input?");
  guitarValueField.innerHTML = guitarRange.value;
  // valueField.style.marginLeft = range.value + "px";
}

guitarRange.addEventListener("input", guitarHappened);


let bassRange= document.getElementById("myBassRange");
let bassValueField= document.getElementById("myBassValue");


function bassHappened(){
  console.log("what's input?");
  bassValueField.innerHTML = drumRange.value;
  // valueField.style.marginLeft = range.value + "px";
}

bassRange.addEventListener("input", bassHappened);


let vocalRange= document.getElementById("myVocalRange");
let vocalValueField= document.getElementById("myVocalValue");

function vocalHappened(){
  console.log("what's input?");
  bassValueField.innerHTML = drumRange.value;
  // valueField.style.marginLeft = range.value + "px";
}

bassRange.addEventListener("input", vocalHappened);
