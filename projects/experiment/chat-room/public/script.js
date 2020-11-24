console.log("work?");

let socket = io();
let namebox = document.getElementById('name');
let chatbox = document.getElementById('chat');
let messagebox = document.getElementById('message');
let sendButton = document.getElementById('send');


sendButton.addEventListener("click", ()=>{
  console.log('click');
  let name = namebox.value.trim();
  if(name =="" ){
    name = "anonymous";
    namebox.value="";
    //clean up the namebox, return to placeholder
  }
  let message = messagebox.value.trim();
  console.log("message:",message);
  if(message != ""){
    //send name + message to server.
    let data= {name: name, message: message};
    socket.emit('message', data);
    console.log("this is data:", data);
  }
  messagebox.value="";
})


socket.on("incoming", (data)=>{
  let name = data.name;
  let message = data.message;
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = "<span class=sender>"+ name+":</span>"+ message;
  li.appendChild(p);
  chatbox.appendChild(li);

})
