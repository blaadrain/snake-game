import Config from './config.js';

export default class GameLoop {
  constructor(update, draw) {
    this.config = new Config();

    this.update = update;
    this.draw = draw;

    this.render = this.render.bind(this);
    this.render();
  }

  render() {
    requestAnimationFrame(this.render);

    if (++this.config.step < this.config.maxStep) {
      return;
    }

    this.config.step = 0;

    this.update();
    this.draw();
  }
}
