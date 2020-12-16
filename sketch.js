const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;         

const Constraint = Matter.Constraint;  //

var engine, world;
var g1,g2,g3,g4;
var chain1,chain2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var b21,b22,b23,b24,b25,b26,b27,b28,b29,b30,b31,b32,b33,b34,b35,b36,b37,b38,b39,b40;
var b41,b42,b43,b44,b45,b46,b47,b48,b49,b50,b51,b52,b53,b54,b55,b56,b57,b58,b59,b60;
var b61,b62,b63,b64,b65,b66,b67,b68,b69,b70,b71,b72,b73,b74,b75,b76,b77,b78,b79,b80;
var hitter,h2,h3;
/*/
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}
*/


function setup(){
    createCanvas(windowWidth,windowHeight);
   
    engine = Engine.create();
   
    world = engine.world;
    
    
    
    g1 = new Ground(width/2,height,width,20);
    g2 = new Ground(width,height/2,20,height);
    g3 = new Ground(0,height/2,20,height);
    g4 = new Ground(width/2,0,width,20);
    
    b1 = new Body(width/2,height/2);
    b2 = new Body(width/2,height/2);
    b3 = new Body(width/2,height/2);
    b4 = new Body(width/2,height/2);
    b5 = new Body(width/2,height/2);
    b6 = new Body(width/2,height/2);
    b7 = new Body(width/2,height/2);
    b8 = new Body(width/2,height/2);
    b9 = new Body(width/2,height/2);
    b10 = new Body(width/2,height/2);
    b11 = new Body(width/2,height/2);
    b12 = new Body(width/2,height/2);
    b13 = new Body(width/2,height/2);
    b14 = new Body(width/2,height/2);
    b15 = new Body(width/2,height/2);
    b16 = new Body(width/2,height/2);
    b17 = new Body(width/2,height/2);
    b18 = new Body(width/2,height/2);
    b19 = new Body(width/2,height/2);
    b20 = new Body(width/2,height/2);
    b21 = new Body(width/2,height/2);
    b22 = new Body(width/2,height/2);
    b23 = new Body(width/2,height/2);
    b24 = new Body(width/2,height/2);
    b25 = new Body(width/2,height/2);
    b26 = new Body(width/2,height/2);
    b27 = new Body(width/2,height/2);
    b28 = new Body(width/2,height/2);
    b29 = new Body(width/2,height/2);
    b30 = new Body(width/2,height/2);
    b31 = new Body(width/2,height/2);
    b32 = new Body(width/2,height/2);
    b33 = new Body(width/2,height/2);
    b34 = new Body(width/2,height/2);
    b35 = new Body(width/2,height/2);
    b36 = new Body(width/2,height/2);
    b37 = new Body(width/2,height/2);
    b38 = new Body(width/2,height/2);
    b39 = new Body(width/2,height/2);
    b40 = new Body(width/2,height/2);






    b41 = new Body(width/2,height/2);
    b42 = new Body(width/2,height/2);
    b43 = new Body(width/2,height/2);
    b44 = new Body(width/2,height/2);
    b45 = new Body(width/2,height/2);
    b46 = new Body(width/2,height/2);
    b47 = new Body(width/2,height/2);
    b48 = new Body(width/2,height/2);
    b49 = new Body(width/2,height/2);
    b50 = new Body(width/2,height/2);
    b51 = new Body(width/2,height/2);
    b52 = new Body(width/2,height/2);
    b53 = new Body(width/2,height/2);
    b54 = new Body(width/2,height/2);
    b55 = new Body(width/2,height/2);
    b56 = new Body(width/2,height/2);
    b57 = new Body(width/2,height/2);
    b58 = new Body(width/2,height/2);
    b59 = new Body(width/2,height/2);
    b60 = new Body(width/2,height/2);
    b61 = new Body(width/2,height/2);
    b62 = new Body(width/2,height/2);
    b63 = new Body(width/2,height/2);
    b64 = new Body(width/2,height/2);
    b65 = new Body(width/2,height/2);
    b66 = new Body(width/2,height/2);
    b67 = new Body(width/2,height/2);
    b68 = new Body(width/2,height/2);
    b69 = new Body(width/2,height/2);
    b70 = new Body(width/2,height/2);
    b71 = new Body(width/2,height/2);
    b72 = new Body(width/2,height/2);
    b73 = new Body(width/2,height/2);
    b74 = new Body(width/2,height/2);
    b75 = new Body(width/2,height/2);
    b76 = new Body(width/2,height/2);
    b77 = new Body(width/2,height/2);
    b78 = new Body(width/2,height/2);
    b79 = new Body(width/2,height/2);
    b80 = new Body(width/2,height/2);

    hitter = new Bat(width/2,height/2);
    h2 = new Body(width/2,height/2);
    h1 = new Body(width/2,height/2);
   
    chain1 = new Chain(hitter.body,h1.body)
    chain2 = new Chain(h1.body,h2.body)

  
    
}

function draw(){
    background("black");

    fill("white")
    textSize(25);
    //textMode(CENTER);
    text("Empty the ball pool by hitting the balls very fast with the chain!!",5,height/2)

    Engine.update(engine);

    g1.display();
    g2.display();
    g3.display();
    g4.display();
    

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    
    b21.display();
    b22.display();
    b23.display();
    b24.display();
    b25.display();
    b26.display();
    b27.display();
    b28.display();
    b29.display();
    b30.display();
    b31.display();
    b32.display();
    b33.display();
    b34.display();
    b35.display();
    b36.display();
    b37.display();
    b38.display();
    b39.display();
    b40.display();


    b41.display();
    b42.display();
    b43.display();
    b44.display();
    b45.display();
    b46.display();
    b47.display();
    b48.display();
    b49.display();
    b50.display();
    b51.display();
    b52.display();
    b53.display();
    b54.display();
    b55.display();
    b56.display();
    b57.display();
    b58.display();
    b59.display();
    b60.display();
    
    b61.display();
    b62.display();
    b63.display();
    b64.display();
    b65.display();
    b66.display();
    b67.display();
    b68.display();
    b69.display();
    b70.display();
    b71.display();
    b72.display();
    b73.display();
    b74.display();
    b75.display();
    b76.display();
    b77.display();
    b78.display();
    b79.display();
    b80.display();

    hitter.display();
    h1.display();
    h2.display();

  
    chain1.display();
    chain2.display();




}
