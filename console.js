/*
 * Toad's Cookie
 * Written by VideoToaster in 2022
 * Fantasy console functionality
 */

class console {
  constructor() {
    this.renderer = new Renderer();
    this.sprites = [];
    this.reset = false;
  }
  
  softreset() {
    oldloop = this.renderer.mainloop;
    this.renderer.mainloop = function() {
      this.mainrenderer.fillrect(0,0,this.width,this.height);
    }
    this.reset = true;
    window.setTimeout(function(){
      this.renderer.mainloop = oldloop;
    }, Math.random*1000);
  }
  
  hardreset() {
    oldloop = this.renderer.mainloop;
    this.renderer.mainloop = function() {
      this.mainrenderer.fillRect(0,0,this.width,this.height);
    }
    this.reset = false;
    if (this.startup != undefined) {
      this.renderer.mainloop = startup;
      window.setTimeout(function(){
        this.renderer.mainloop = oldloop;
      }, Math.random*5000);
    }
  }
  crash() {
    for (var x=0; x<this.renderer.width; x+=2) {
      this.renderer.mainloop = this.renderer.mainloop + function(){mainrenderer.fillRect(0,0,1,this.renderer.height)}
    }
  }
}
}
