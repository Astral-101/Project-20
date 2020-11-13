var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = "grey";
  speed = random(55, 90);
  weight = random(400, 1500);

  car.velocityX = speed;

}

function draw() {
  background(255,255,255);  

  if (car.x - wall.x < car.width/2  + wall.width/2){
    var deformation = 0.5*weight*speed*speed/22509;
    console.log(deformation);
    
    if (deformation<100){
      car.shapeColor = "green";


    }

    else if(deformation>100 && deformation<180){
      car.shapeColor = "yellow";

    }

    else {
      car.shapeColor = "red";
    }
  }


  drawSprites();
}