class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          mass: 100000000,
          density: 100000,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(mouseY,mouseX,mouseY);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };