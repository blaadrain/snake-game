import Config from './config.js';

export default class Snake {
  constructor() {
    this.config = new Config();

    this.x = 160;
    this.y = 160;

    this.dx = this.config.sizeCell;
    this.dy = 0;

    this.tail = [];
    this.maxTail = 3;

    this.move();
  }

  update(berry, score, canvas) {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x < 0) {
      this.x = canvas.element.width - this.config.sizeCell;
    } else if (this.x >= canvas.element.width) {
      this.x = 0;
    }

    if (this.y < 0) {
      this.y = canvas.element.height - this.config.sizeCell;
    } else if (this.y >= canvas.element.height) {
      this.y = 0;
    }

    this.tail.unshift({ x: this.x, y: this.y });

    if (this.tail.length > this.maxTail) {
      this.tail.pop();
    }

    this.tail.forEach((item, index) => {
      if (item.x === berry.x && item.y === berry.y) {
        this.maxTail++;
        score.incScore();
        berry.create();
      }

      for (let i = index + 1; i < this.tail.length; i++) {
        if (item.x == this.tail[i].x && item.y == this.tail[i].y) {
          this.die();
          score.gameOver();
          berry.create();
        }
      }
    });
  }

  draw(context) {
    this.tail.forEach((item, index) => {
      if (index == 0) {
        context.fillStyle = '#6ee079';
      } else {
        context.fillStyle = '#49ba54';
      }

      context.fillRect(
        item.x,
        item.y,
        this.config.sizeCell,
        this.config.sizeCell
      );
    });
  }

  die() {
    this.x = 160;
    this.y = 160;

    this.dx = this.config.sizeCell;
    this.dy = 0;

    this.tail = [];
    this.maxTail = 3;
  }

  move() {
    document.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'KeyW': {
          this.dy = -this.config.sizeCell;
          this.dx = 0;
          break;
        }
        case 'KeyA': {
          this.dx = -this.config.sizeCell;
          this.dy = 0;
          break;
        }
        case 'KeyS': {
          this.dy = this.config.sizeCell;
          this.dx = 0;
          break;
        }
        case 'KeyD': {
          this.dx = this.config.sizeCell;
          this.dy = 0;
          break;
        }
      }
    });
  }
}
