/*
 Toad's Cookie -  a vanilla JS game engine
 Written by VideoToaster in 2022
 Rendering backend.
*/

class Renderer {
  /*
    Renderer constructor
    width   : original width.
    height  : original height.
    rwidth  : scaled width. (essentially a scaled version of the original)
    rheight : scaled height. (see above)
  */
  constructor(width, height, rwidth, rheight, fps) {
    // set basic size variables
    this.width = width;
    this.height = height;
    
    // set up the main image-production canvas
    this.maincanvas = document.createElement("canvas");
      this.maincanvas.style.display = "none";
      this.maincanvas.width = width;
      this.maincanvas.height = height;
    this.maincontext = this.maincanvas.getContext("2d");
      this.maincontext.imageSmoothingEnabled = false; // nice pixel art scaling
    
    // set up the render target canvas
    this.rendertarget = document.createElement("canvas"); // this scales stuff up
      this.rendertarget.width = width;
      this.rendertarget.height = height;
    this.rendercontext = this.rendertarget.getContext("2d");
      this.rendercontext.imageSmoothingEnabled = false; // nice pixel art scaling
      
    // fps management
    this.frame = 0;
    this.fps = fps;
    
    this.timerID = window.setInterval(function renderer() {
      this.frame++;
      this.mainloop_render(this.frame, this.fps);
      if (this.frame == this.fps) {
        this.frame = 0;
      }
    }, 1000 / this.fps);
  }
  
  noMainloopAlert() {
    if (TK_ERRORS != undefined) {
      tk_error("No mainloop function in renderer "+this.name);
    } else {
      console.error("ERROR!!! No mainloop function in renderer "+this.name);
    }
  }
  
  mainloop_render(frame, fps) {
    // make an <img> with the main canvas as it's image
    var element = document.createElement("img");
    element.src = this.maincanvas.toDataURL("image/png");
    this.rendercontext.clearRect(0, 0, this.rendertarget.width, this.rendertarget.height)
    this.rendercontext.drawImage(element, 0, 0, rendertarget.width, rendertarget.height)
    element.remove();
    if (mainloop != undefined) {
      mainloop(frame, fps); // THIS IS AN EVENT!!
      this.rendercontext.clearRect(0, 0, rendertarget.width, rendertarget.height);
      drawToRT(this.maincanvas, this.rendertarget);
    } else {
      this.noMainloopAlert();
    }
  }
}
