var fixedRect, movingRect;
var object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "brown";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  object1 = createSprite(100,50,50,50)

  object2 = createSprite(100,350,50,50)
  object2.shapeColor = "red"
}

function draw() {
  background(0,0,0);  

  object1.x = World.mouseX
  object1.y = World.mouseY

  if(isTouching(object1,object2)) {
    object1.shapeColor = "white";
    object2.shapeColor = "white";
  } else{
    object1.shapeColor = "red"
    object2.shapeColor = "red"
  }

  bounceOff(fixedRect,movingRect)

  drawSprites();
}

