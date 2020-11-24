console.log("work??")

let socket = io();
let chatbox = document.getElementById('chat');
let chatmarquee = document.getElementById('chatbox');
let messagebox = document.getElementById('message');
let sendButton = document.getElementById('send');

sendButton.addEventListener("click", () => {
  console.log('click');
  let message = messagebox.value.trim();
  console.log("message:", message);

    if (message != "") {
      //send message to server.
      let data = {
        message: message
      };
      socket.emit('message', data);
      console.log("this is data:", data);
    }
    messagebox.value = "";

})


socket.on("incoming", (data) => {
  let message = data.message;
  let p = document.createElement("p");
  p.innerHTML = "<marquee direction=\"left\" loop='1'>" + message + "</marqee>";
  console.log(p);
  chatbox.appendChild(p);

  let x = chatbox.childElementCount;
  console.log("number of p:",x);
  if(x>=6){
    chatbox.removeChild(chatbox.childNodes[0]);
  }
})

messagebox.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    sendbutton.click();
  }
});
