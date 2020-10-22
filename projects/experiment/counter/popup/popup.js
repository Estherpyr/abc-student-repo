let counterButton = document.getElementById("counter");
let value = document.getElementById("currentValue");

let currentValue = 0;

chrome.runtime.sendMessage({type:"getCurrentValue"}, function(response){
  console.log("response is", response);
  currentValue= response.value;
  value.innerHTML = currentValue;
});

button.addEventListerner("click",=>{
  currentValue+=1;
  value.innerHTML= currentValue;

  chrome.runtime.sendMessage({type:"increaseValue"});
})
