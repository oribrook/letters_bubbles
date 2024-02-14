class Bubble {
  constructor(letter, x, y) {
    this.letter = letter;    
    this.baseX = x;
    this.baseY = y;
    this.image = new Image();
    this.image.src = `letters/${this.letter}.png`;
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.baseX + Math.random() * 20,
      this.baseY + Math.random() * 20,
      BUBBLE_SIZE,
      BUBBLE_SIZE
    );
  }  
}


