var car,wall;
var speed,weight;




function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 300, 50, 50);
  wall= createSprite(1245, 300, 60,height/2);
  car.velocityX = speed;
 
 
  speed = random(100,200);
  weight = random(400,1500);
}
function draw() {
  background(255,255,255);  
  
  drawSprites();
}