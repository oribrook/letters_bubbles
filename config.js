BUBBLE_SIZE = 50;
maxLetters = 5;
gameSpeed = 20;

const canvasElem = document.getElementById("canvas");
const ctx = canvasElem.getContext("2d");
CANVAS_WIDTH = canvasElem.width = 800;
CANVAS_HEIGHT = canvasElem.height = 800;

mainCanvas = document.getElementById("canvas");
rect = mainCanvas.getBoundingClientRect();
canvasStartX = rect.left;
canvasEndX = rect.right;
canvasStartY = rect.top;
canvasEndY = rect.bottom;

const letters = [];
const explosions = [];

let curLetter = 65;
