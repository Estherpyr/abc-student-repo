let currentValue = 0;



chrome.runtime.onMessage.addEventListerner(function(message,sender,sendResponse){
  console.log(message);
  if (message.type == "getCurrentValue"){
    sendResponse{type:"currentValue", value:currentValue};
  }else if (message.type == "increaseValue"){
    currentValue+=1;

    chrome.storage.local.set({counterValue:currentValue},function(){
      console.log('value is '+ counterValue)
    })
  }
});
