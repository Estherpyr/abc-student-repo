let findWord = document.getElementById("findword");
let button = document.getElementById("replaceButton");


button.addEventListener("click", ()=>{

  let wordToSearchFor = findWord.value;

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {find: wordToSearchFor});
  });
})
