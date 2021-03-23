var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,800);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  speed=random(55,90);
  weight=random(400,1500);
  console.log(1470-25);
}

function draw() {
  background(255,255,255);  
  wall.shapeColor="rgb(80,80,80)";
  car.velocityX=speed;
  if(wall.x-car.x <(car.width+wall.width)/2)
  {
    car.velocityX=0;
    car.x=1445;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car.shapeColor="rgb(255,0,0)";
      car.x=1470;
  
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor="rgb(230,230,0)";
      car.x=1450;
    }
    if(deformation<100)
    {
      car.shapeColor="rgb(0,255,0)";
    }
  }
  drawSprites();
}