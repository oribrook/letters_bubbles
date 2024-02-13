const explosionImage = new Image();
explosionImage.src = "explosion.PNG";

const explosionSound = new Audio();
explosionSound.src = "sounds/boom.wav";

const exWidth = 519 / 5;
const exHeight = 94;

class Explosion {
  constructor(x, y, index) {
    this.x = x;
    this.y = y;
    this.frame = 0;
    this.index = index;
  }

  update() {
    this.frame++;    
  }
  draw() {
    ctx.drawImage(
      explosionImage,
      this.frame * exWidth,
      0,
      exWidth,
      exHeight,
      this.x,
      this.y,
      exWidth,
      exHeight
    );
    if (this.frame > 5) {
        explosions.splice(this.index, 1);
      }
  }
}
