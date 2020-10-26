let currentValue = 0;

chrome.storage.local.get(['counterValue'], function(result){
if(result.currentValue = undefined){
  currentValue = 0;

  //store the increased value to storage
  chrome.storage.local.set({counterValue: currentValue}, function(){

  });
}else{
  currentValue = result.counterValue;
}
});



//get the message from the popup script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request);

  if(request.type == "getCurrentValue"){
    sendResponse({type: "currentValue", value: currentValue});
  }else if (message.type =="incresedValue"){
    currentValue += 1;
  }

  chrome.storage.local.set({counterValue: currentValue})
  });
