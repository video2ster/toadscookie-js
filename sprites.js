/*
 *  Toad's Cookie
 *  Written in 2022 by VideoToaster
 *  Simple sprite class for the engine
 */

class Sprite {
  constructor(x, y, w, h, src) {
    this.x = x; this.y = y; this.width = w; this.height = h;
    this.imageSrc = src;
  }
  
  drawOnRenderer(renderer) {
    var sprite = document.createElement("img");
    sprite.src = this.imageSrc;
    renderer.maincontext.drawImage(sprite, this.x, this.y, this.width, this.height);
    sprite.remove();
    // I refuse to refresh the canvas. Do it yourself.
    // no, but actually it would break everything
  }
}
