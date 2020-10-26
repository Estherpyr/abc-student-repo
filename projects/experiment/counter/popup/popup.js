let counterButton = document.getElementById("button");
let valueDisplay = document.getElementById("currentValue");

let currentValue = 0;


//send the message to the background script, send the message, and the
//function(response) is what returned

chrome.runtime.sendMessage({type: "getCurrentValue"}, function(response) {
  currentValue = response.value;
  valueDisplay.innerHTML =currentValue;
});

button.addEventListerner("click",=>{
  currentValue+=1;
  valueDisplay.innerHTML = currentValue;

  chrome.runtime.sendMessage({type: "incresedValue"}), function(response){

  };
}
