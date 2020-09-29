let on = document.getElementById("on");
let off = document.getElementById("off");

let context = new AudioContext();
console.log(context);

let oscillator = context.createOscillator();
oscillator.type ="triangle";
oscillator.frequency = 440;
