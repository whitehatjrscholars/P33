var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;

var count = 0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (particle != null){
     particle.display();
     if (particle.body.position.y > 760){
       if (particle.body.position.x < 300){
        score += 500;
        particle = null
        if (count >= 5) gameState = "end";
       }
     }
   }

   if (particle != null){
    particle.display();
    if (particle.body.position.y > 760){
      if (particle.body.position.x > 300 && particle.body.position.x < 600){
       score += 100;
       particle = null
       if (count >= 5) gameState = "end";
      }
    }
  }

  if (particle != null){
    particle.display();
    if (particle.body.position.y > 760){
      if (particle.body.position.x > 600){
       score += 200;
       particle = null
       if (count >= 5) gameState = "end";
      }
    }
  }

  if (gameState === "end"){
    textSize(69);
    text("Game Over", 240, 250)
  }

  textSize(32)
  text(500, 10, 530)
  text(500, 90, 530)
  text(500, 170, 530)
  text(500, 250, 530)
  text(100, 330, 530)
  text(100, 410, 530)
  text(100, 490, 530)
  text(200, 570, 530)
  text(200, 650, 530)
  text(200, 730, 530)
}

function mousePressed(){
  if (gameState != "end"){
    particle = new Particle(mouseX, 10, 10)
    count++
  }
}