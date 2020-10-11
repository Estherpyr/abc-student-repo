let on = document.getElementById("on");
let off = document.getElementById("off");

let context = new AudioContext();
let destination = context.destination;

let oscillator = context.createOscillator();
oscillator.type = "triangle";
oscillator.frequency.value = 440;

let gain = context.createGain();

oscillator.connect(gain);
gain.connect(destination);

let oscillatorStarted = false;

let screenWidth = screen.width;
let browserX = window.screenX;
let browserWidth = window.innerWidth;

function map(value, x1, y1, x2, y2){
  return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
}

let volume = map(browserX, 0, screenWidth-browserWidth, 0, 1);

gain.gain.value = volume;


let minHz = 65;
let maxHz = 1050;

let minBrowserSurface = 90000;
let maxBrowserSurface = 540000;

let currentBrowserSurface = window.innerWidth * window.innerHeight;
let frequency = map(currentBrowserSurface, minBrowserSurface, maxBrowserSurface, minHz, maxHz);
console.log(frequency);
if(frequency > maxHz){
  frequency = maxHz;
}else if(frequency < minHz){
  frequency = minHz;
}

oscillator.frequency.value = frequency;


on.addEventListener("click", ()=>{
  if(!oscillatorStarted){
    oscillator.start(0);
    oscillatorStarted = true;
  }


  gain.gain.value = map(window.screenX, 0, screenWidth-window.innerWidth, 0, 1);

});

off.addEventListener("click", ()=>{
  gain.gain.value = 0;
});



window.addEventListener("resize", ()=>{
  let newWindowSurface = window.innerWidth * window.innerHeight;
  // mapping using the variables created before
  let newFrequency = map(newWindowSurface, minBrowserSurface, maxBrowserSurface, minHz, maxHz);
  // capping the value
  if(newFrequency > maxHz){
    newFrequency = maxHz;
  }else if(newFrequency < minHz){
    newFrequency = minHz;
  }
  // ...aaaaand use it:
  oscillator.frequency.value = newFrequency;

  gain.gain.value = map(window.screenX, 0, screenWidth-window.innerWidth, 0, 1);

})


let prevWindowX = window.screenX;


setInterval(()=>{
  if(prevWindowX != window.screenX){

    gain.gain.value = map(window.screenX, 0, screenWidth-window.innerWidth, 0, 1);

  }

  prevWindowX = window.screenX
}, 50); 
