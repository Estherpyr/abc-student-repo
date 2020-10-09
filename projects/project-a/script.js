let playDrum = document.getElementById("drums");
let playGuitar = document.getElementById("guitar");
let playVocal = document.getElementById("vocal");
let playBass = document.getElementById("bass");

playDrum.addEventListener("click",function(){
  startDrum();
  startDrumImage();
});

playGuitar.addEventListener("click",function(){
  startGuitar();
  startGuitarImage();
});

playVocal.addEventListener("click",function(){
  startVocal();
  startVocalImage();
});

playBass.addEventListener("click",function(){
  startBass();
  startBassImage();
});

/////////////////////!!functions here!!////////////////////////
