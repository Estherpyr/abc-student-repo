console.log("hello i am the background script");

let currentValue = 0;

chrome.storage.local.get(['counterValue'], function(result) {
  console.log('Value currently is ' + result.counterValue);
  if(result.counterValue == undefined){
    currentValue = 0;

    // store the increased value to storage
    chrome.storage.local.set({counterValue: currentValue}, function() {
      console.log('Value is set to ' + currentValue);
    });

  }else{

    currentValue = result.counterValue;

  }

});


// listening for incoming messages
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  console.log(message);

  // checking what kind of message we received
  if(message.type == "getCurrentValue"){
    // if someone asks for the currentvalue we respond with the value
    sendResponse({type: "currentValue", value: currentValue});
  }else if(message.type == "increaseValue"){
    // if someone increased the value, we do so here, too.
    currentValue += 1;

    // store the increased value to storage
    chrome.storage.local.set({counterValue: currentValue}, function() {
      console.log('Value is set to ' + currentValue);
    });


  }

});
