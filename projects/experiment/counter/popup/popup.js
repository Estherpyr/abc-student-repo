
let button = document.getElementById("increaseButton");
let valueDisplay = document.getElementById("currentValue");

let currentValue = 0;


// get current value from background script
chrome.runtime.sendMessage( {type: "getCurrentValue"}, function(response){
  // receive the value inside this callback function
  console.log("response is", response)
  // update the value of currentValue with the one we receive from background script
  currentValue = response.value;
  // update the value displayed on the page
  valueDisplay.innerHTML = currentValue;
});



button.addEventListener("click", ()=>{
  // increase value
  currentValue+=1;
  // update dislayed value
  valueDisplay.innerHTML = currentValue;
  //tell background script we increased by one
  chrome.runtime.sendMessage( {type: "increaseValue"} );

})
