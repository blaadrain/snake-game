export default class Score {
  constructor(scoreBlock, score = 0) {
    this.scoreBlock = document.querySelector(scoreBlock);
    this.score = score;

    this.draw();
  }

  incScore() {
    this.score++;
    this.draw();
  }

  gameOver() {
    this.score = 0;
    this.draw();
  }

  draw() {
    this.scoreBlock.textContent = this.score;
  }
}
