/** @type {HTMLCanvasElement} */

class Bubble {
  constructor(letter) {
    this.letter = letter;
    this.x = Math.random() * CANVAS_WIDTH - CANVAS_WIDTH / 2;
    this.y = Math.random() * CANVAS_HEIGHT - CANVAS_HEIGHT / 2;

    this.image = new Image();
    this.image.src = `letters/${this.letter}.png`;    
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, BUBBLE_SIZE, BUBBLE_SIZE);
  }
  update() {
    this.x += Math.random() * 50 - 25;
    this.y += Math.random() * 50 - 25;

    if (this.x > CANVAS_WIDTH - BUBBLE_SIZE || this.x < 0) {
      this.x = Math.random() * CANVAS_WIDTH - CANVAS_WIDTH / 2;
    }
    if (this.y > CANVAS_HEIGHT - BUBBLE_SIZE || this.y < 0) {
      this.y = Math.random() * CANVAS_HEIGHT - CANVAS_HEIGHT / 2;
    }
  }
}

letters.push(new Bubble("A", 0, 0));
