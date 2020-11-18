console.log("it's right");
let lookButton = document.getElementById("look");
let giftInput = document.getElementById("gift");
let sendGift = document.getElementById("sendGift");
let garden = document.getElementById("garden");

sendGift.addEventListener("click",()=>{
  console.log("click?")
  let gift= giftInput.value;
  fetch("/gift?gift="+ gift);

  giftInput.value="";

  //the fetch API provides an interface for fetching resources
})

// function receivedSecretsForGarden(data){
//   console.log("decode",data);
// }

// function decode(data){
//   return data.json();
// }

function placeGift(gift){
  let p= document.createElement("p");
  p.innerHTML = gift;
  p.style.position = "absolute";
  p.style.left = Math.random()* window.innerWidth+"px";
  p.style.top = Math.random()* window.innerHeight+"px";
  garden.appendChild(p);
}

lookButton.addEventListener("click",()=>{
  console.log("getting giftss");
  fetch("/box")
  .then(data=>data.json())
  .then(data=>{
    console.log("decoded:",data);
    let gifts= data.content;
    let firstGift= gifts[0];
    garden.innerHTML = "";
    for(i=0; i<gifts.length; i++){
      placeGift(gifts[i]);
    }

  });


})
