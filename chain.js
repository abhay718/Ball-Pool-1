class Chain{
    constructor(bodyA,bodyB) {
        var options = {

            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.2,
            length: 50
            
       
           }
       
           this.chain = Constraint.create(options);
           World.add(world,this.chain);
       
      }
     display(){

     var bA = this.chain.bodyA.position;
     var bB = this.chain.bodyB.position;



        fill (mouseY,mouseX,mouseY)
        line(bA.x,bA.y,bB.x,bB.y);



     }
}