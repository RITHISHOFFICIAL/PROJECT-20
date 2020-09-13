var car,wall;
var speed,weight,deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);

  car =createSprite(40,200,30,10);
  wall=createSprite(1450,200,60,height/2);

}

function draw() {
  background(0);  
  deformation=0.5*weight*speed*speed/22500;
  
  car.velocityX=speed;

  if (car.collide(wall)){
      if (deformation>180){
          car.shapeColor="red";
          car.velocityX=0;
        } 

      if (deformation===random(100,180)){
            car.shapeColor="yellow";
            car.velocityX=0;
        }

    
      if (deformation<100){
            car.shapeColor="green";
            car.velocityX=0;
          }
      }

  drawSprites();

}