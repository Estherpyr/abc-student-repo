alert('Open the popup to change the word with flowers!');
//

function repl(find, replace){
  var finder = new RegExp(find,"g");//global
  document.body.innerHTML = document.body.innerHTML.replace(finder,'<span>💐🌹🌻🌸</span>');
  //找到所有的 finder 然后用replace替换掉所有的finder
}


function gotMessage(request, sender, sendResponse){
  repl(request.find, request.replace);
}




chrome.runtime.onMessage.addListener(gotMessage);
// more on messaging: https://developer.chrome.com/extensions/messaging
