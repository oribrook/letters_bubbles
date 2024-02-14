BUBBLE_SIZE = 100;
maxLetters = 3;
gameSpeed = 20;

const canvasElem = document.getElementById("canvas");
const ctx = canvasElem.getContext("2d");
CANVAS_WIDTH = canvasElem.width = window.innerWidth * 0.95;
CANVAS_HEIGHT = canvasElem.height = window.innerHeight * 0.9;

mainCanvas = document.getElementById("canvas");
rect = mainCanvas.getBoundingClientRect();
canvasStartX = rect.left;
canvasEndX = rect.right;
canvasStartY = rect.top;
canvasEndY = rect.bottom;

circle2 = false; // after finish all letters, next letter will be random

let letters = [];
const explosions = [];

// let curLetter = 65+24;
let curLetter = "A";

letterAudio = new Audio();
letterAudio.src = "sounds/A.ogg";
letterAudio.play();

const soundElem = document.getElementById("soundbutton");
soundElem.addEventListener("click", () => {
  letterAudio.play();
});
soundElem.addEventListener("startTouch", () => {
  letterAudio.play();
});

const applauseSound = new Audio();
applauseSound.src = "sounds/applause.wav";

const failSound = new Audio();
failSound.src = "sounds/fail.wav";
