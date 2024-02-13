let frame = 0;
function animate() {
  if (frame % gameSpeed == 0) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // draw letters
    for (let i = 0; i < letters.length; i++) {
      letters[i].update();
      letters[i].draw();
    }
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
