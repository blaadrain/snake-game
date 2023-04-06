export default class Canvas {
  constructor(container) {
    this.element = document.createElement('canvas');
    this.context = this.element.getContext('2d');

    this.element.width = 400;
    this.element.height = 400;

    container.append(this.element);
  }
}
