let playDrum = document.getElementById("drums");
let playGuitar = document.getElementById("guitar");
let playVocal = document.getElementById("vocal");
let playBass = document.getElementById("bass");
/////////////////////!!functions here!!////////////////////////

function startDrum() {
  var drumBeat = document.getElementById("drumBeat");
  drumBeat.loop = true;
  drumBeat.play();
};

function stopDrum() {
  var drumBeat = document.getElementById("drumBeat");
  drumBeat.pause();
}

function startGuitar() {
  var guitarSound = document.getElementById("guitarSound");
  guitarSound.loop = true;
  guitarSound.play();
};

function stopGuitar() {
  var guitarSound = document.getElementById("guitarSound");
  guitarSound.pause();
};

function startVocal() {
  var yoSound = document.getElementById("yoSound");
  yoSound.play();
};

function stopVocal() {
  var yoSound = document.getElementById("yoSound");
  yoSound.pause();
};

function startBass() {
  var bassBeat = document.getElementById("bassBeat");
  bassBeat.loop = true;
  bassBeat.play();
};

function stopBass() {
  var bassBeat = document.getElementById("bassBeat");
  bassBeat.pause();
};



let playing = false;

//play button
playDrum.addEventListener("click", function() {
  if (!playing) {
    startDrum();
    // startDrumImage();
    playDrum.innerHTML = "STOP";
  } else {
    stopDrum();
    playDrum.innerHTML = "DRUM";
  }
  playing = !playing;
});

playGuitar.addEventListener("click", function() {
  if (!playing) {
    startGuitar();
    // startGuitarImage();
    playGuitar.innerHTML = "STOP";
  } else {
    stopGuitar();
    playGuitar.innerHTML = "GUITAR"
  }
  playing = !playing;
});

playVocal.addEventListener("click", function() {
  if (!playing) {
    startVocal();
    // startVocalImage();
    playVocal.innerHTML = "STOP";
  } else {
    stopVocal();
    playVocal.innerHTML = "VOCAL"
  }
  playing = !playing;
});

playBass.addEventListener("click", function() {
  if (!playing) {
    startBass();
    // startBassImage();
    playBass.innerHTML = "STOP";
  } else {
    stopBass();
    playBass.innerHTML = "BASS"
  }
  playing = !playing;
});

///////////////

let sw = screen.width;
let sh = screen.height;

let popupWidth = 200;
let popupHeight = 200;

let volumeControl = document.getElementById("allVolume"); //button that control the volumes

volumeControl.addEventListener("click", openControl);

function openControl() {
  let x = window.innerWidth / 4;
  let y = 0;
  let specifications = "width=" + popupWidth + ", height=" + popupHeight + ", left=" + x + ", top=" + y;
  let url = "drum";
  let newWindow = window.open(url, "", specifications);
  newWindow.addEventListener("input", changeVolume);

  function changeVolume() {
    let myDrumVolume = document.getElementById("drumBeat");
    myDrumVolume.volume = newWindow.document.getElementById("myDrumRange").value / 5;
    let myBassVolume = document.getElementById("bassBeat");
    myBassVolume.volume= newWindow.document.getElementById("myBassRange").value/5;
    let myGuitarVolume = document.getElementById("guitarSound");
    myGuitarVolume.volume= newWindow.document.getElementById("myGuitarRange").value/5;
    let myVocalVolume = document.getElementById("yoSound");
    myVocalVolume.volume= newWindow.document.getElementById("myVocalRange").value/5;
  }
}

//
// function startDrumImage() {
//   let x = window.innerWidth / 4;
//   let y = 0;
//   let specifications = "width=" + popupWidth + ", height=" + popupHeight + ", left=" + x + ", top=" + y;
//   let url = "drum";
//   let newWindow = window.open(url, "", specifications);
//   newWindow.addEventListener("input", changeDrumVolume);
//   function changeDrumVolume() {
//     let myDrumVolume = document.getElementById("drumBeat");
//     myDrumVolume.volume = newWindow.document.getElementById("myRange").value/5;
//   }
// }
//
// function startGuitarImage() {
//   let x = window.innerWidth / 3;
//   let y = 0;
//   let specifications = "width=" + popupWidth + ", height=" + popupHeight + ", left=" + x + ", top=" + y;
//   let url = "guitar";
//   let newWindow = window.open(url, "", specifications);
//   newWindow.addEventListener("input", changeGuitarVolume);
//   function changeGuitarVolume() {
//     let myGuitarVolume = document.getElementById("guitarSound");
//     myGuitarVolume.volume = newWindow.document.getElementById("myRange").value;
//   }
// }
//
// function startVocalImage() {
//   let x = window.innerWidth / 2;
//   let y = 0;
//   let specifications = "width=" + popupWidth + ", height=" + popupHeight + ", left=" + x + ", top=" + y;
//   let url = "vocal";
//   let newWindow = window.open(url, "", specifications);
//   newWindow.addEventListener("input", changeVocalVolume);
//   function changeDrumVolume() {
//     let myVocalVolume = document.getElementById("yoSound");
//     myVocalVolume.volume = newWindow.document.getElementById("myRange").value;
//   }
// }
//
// function startBassImage() {
//   let x = window.innerWidht / 7;
//   let y = 0;
//   let specifications = "width=" + popupWidth + ", height=" + popupHeight + ", left=" + x + ", top=" + y;
//   let url = "bass";
//   let newWindow = window.open(url, "", specifications);
//   newWindow.addEventListener("input", changeBassVolume);
//   function changeBassVolume() {
//     let myBassVolume = document.getElementById("bassBeat");
//     myBassVolume.volume = newWindow.document.getElementById("myRange").value;
//   }
// }
