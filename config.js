BUBBLE_SIZE = 100;
maxLetters = 4;
gameSpeed = 20;

const canvasElem = document.getElementById("canvas");
const ctx = canvasElem.getContext("2d");
CANVAS_WIDTH = canvasElem.width = window.innerWidth * 0.9;
CANVAS_HEIGHT = canvasElem.height = window.innerHeight * 0.7;

mainCanvas = document.getElementById("canvas");
rect = mainCanvas.getBoundingClientRect();
canvasStartX = rect.left;
canvasEndX = rect.right;
canvasStartY = rect.top;
canvasEndY = rect.bottom;

const letters = [];
const explosions = [];

let curLetter = 65;
