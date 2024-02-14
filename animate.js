half = CANVAS_WIDTH / 8;
const positions = {
  0: [half, half],
  1: [CANVAS_WIDTH / 2 + half, half],
  2: [half, CANVAS_HEIGHT / 2 + half],
  3: [CANVAS_WIDTH / 2 + half, CANVAS_HEIGHT / 2 + half],
};



initLettersAndBubbles();

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// indexes = shuffleArray([0, 1, 2, 3]);

let frame = 0;
function animate() {
  if (frame % gameSpeed == 0) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    bubbles.forEach((b) => {
      b.draw();
    });

    // draw explosions
    for (let i = 0; i < explosions.length; i++) {
      explosions[i].update();
      explosions[i].draw();
    }
  }
  frame++;

  requestAnimationFrame(animate);
}

animate();
