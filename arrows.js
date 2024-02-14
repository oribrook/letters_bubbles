function handleTouch(x, y) {
  if (
    x < canvasStartX ||
    x > canvasStartX + CANVAS_WIDTH ||
    y < canvasStartY ||
    y > canvasStartY + CANVAS_HEIGHT
  ) {
    return;
  }
  x -= canvasStartX;
  y -= canvasStartY;
  
  // 0
  if (x < CANVAS_WIDTH / 2 && y < CANVAS_HEIGHT / 2) {
    if (curLetter == bubbles[0].letter) {
      handleSuccess();
      return;
    }
    // handleFail();
  }
  // 1
  if (x > CANVAS_WIDTH / 2 && y < CANVAS_HEIGHT / 2) {
    if (curLetter == bubbles[1].letter) {
      handleSuccess();
      return;
    }
    handleFail();
  }
  // 2
  if (x < CANVAS_WIDTH / 2 && y > CANVAS_HEIGHT / 2) {
    if (curLetter == bubbles[2].letter) {
      handleSuccess();
      return;
    }
    handleFail();
  }
  // 3
  if (x > CANVAS_WIDTH / 2 && y > CANVAS_HEIGHT / 2) {
    if (curLetter == bubbles[3].letter) {
      handleSuccess();
      return;
    }
    handleFail();
  }
}

function onClick(event) {
  handleTouch(event.clientX, event.clientY);
}
document.addEventListener("touchstart", function (event) {
  const touch = event.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;
  handleTouch(x, y);
});

document.addEventListener("click", onClick);
