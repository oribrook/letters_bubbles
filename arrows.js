function handleTouch(x, y) {
  console.log(x, y);
  console.log(letters);
  console.log(curLetter);

  for (let i = 0; i < letters.length; i++) {
    b = letters[i];
    if (String.fromCharCode(curLetter) != b.letter) {
      continue;
    }

    letterX = b.x + canvasStartX;
    letterY = b.y + canvasStartY;

    if (
      x > letterX &&
      x < letterX + BUBBLE_SIZE &&
      y > letterY &&
      y < letterY + BUBBLE_SIZE
    ) {
      explosions.push(
        new Explosion(letters[i].x, letters[i].y, explosions.length)
      );
      letters.splice(i, 1);
      explosionSound.play();
      letters.push(new Bubble(String.fromCharCode(curLetter)));
      curLetter++;
      letters.push(new Bubble(String.fromCharCode(curLetter)));

      // if (letters.length > maxLetters) {
      //     i_ = Math.floor(Math.random() * letters.length);
      //     letters.splice(i_, 1);
      // }
    }
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

