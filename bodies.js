class Body {
    constructor(x,y) {
      var options = {
          //isStatic: true
          mass: 20,
          density:5,
          friction:0.3,
          restitution: 1,
      }
      this.body = Bodies.circle(x,y,25,options);
      this.radius = 25;
      
      World.add(world, this.body);
    }
    display(){
     // var random = Math.round(random(1,1001))
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill(mouseX,mouseY,mouseX);
      ellipse(pos.x, pos.y, this.radius*2, this.radius*2);
    }
  };