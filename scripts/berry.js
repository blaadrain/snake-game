import Config from './config.js';
import { getRandomInt } from './utils.js';

export default class Berry {
  constructor(canvas) {
    this.config = new Config();
    this.canvas = canvas;

    this.x = 0;
    this.y = 0;

    this.create();
  }

  draw(context) {
    context.beginPath();
    context.fillStyle = '#A00034';

    context.arc(
      this.x + this.config.sizeCell / 2,
      this.y + this.config.sizeCell / 2,
      this.config.sizeBerry,
      0,
      2 * Math.PI
    );

    context.fill();
  }

  create() {
    this.x =
      getRandomInt(0, this.canvas.element.width / this.config.sizeCell) *
      this.config.sizeCell;
    this.y =
      getRandomInt(0, this.canvas.element.height / this.config.sizeCell) *
      this.config.sizeCell;
  }
}
