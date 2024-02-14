function initLettersAndBubbles(params) {
  letters = [];
  letters.push(curLetter);
  [0, 1, 2].forEach((i) => {
    let new_letter = Math.floor(Math.random() * 26 + 65);
    new_letter = String.fromCharCode(new_letter);
    letters.push(new_letter);
  });
  letters = shuffleArray(letters);
  bubbles = [];
  for (i = 0; i < 4; i++) {
    bubbles.push(new Bubble(letters[i], positions[i][0], positions[i][1]));
  }
}

function updateCurLetterP() {
  curLetterElem = document.getElementById("curletter");
  curLetterElem.textContent = curLetter;
}

function nextLetter() {
  if (curLetter.charCodeAt(0) + 1 >= 65 + 26) {
    circle2 = true;
  }
  if (circle2) {
    cl_number = Math.floor(Math.random() * 26 + 65);
  } else {
    cl_number = curLetter.charCodeAt(0) + 1;
  }
  curLetter = String.fromCharCode(cl_number);
  letterAudio.src = `sounds/${curLetter}.ogg`;
  letterAudio.play();
}

function handleSuccess() {
  //   if (!circle2) {
  //     curLetter = curLetter.charCodeAt(0) + 1;
  //   }
  //   if (curLetter >= 65 + 26) {
  //     circle2 = true;
  //   }
  //   if (circle2) {
  //     curLetter = Math.floor(Math.random() * 26 + 65);
  //   }
  nextLetter();
  initLettersAndBubbles();
  updateCurLetterP();
}
