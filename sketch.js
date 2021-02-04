var fixedRect, movingRect;
var f2,f3

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  f2=createSprite(100,100,50,50);
  f2.shapeColor="green";
f2.debug=true;
  f3=createSprite(200,100,50,50);
  f3.shapeColor="green";
f3.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(collisionMaster(movingRect,f2)){
movingRect.shapeColor="red"
f2.shapeColor="red"
  }
  else if (collisionMaster(movingRect,f3)){
    movingRect.shapeColor="red"
    f3.shapeColor="red"
  }
else if(collisionMaster(movingRect,fixedRect)){
  movingRect.shapeColor="red"
  fixedRect.shapeColor="red"
}

  
  drawSprites();
}
function collisionMaster(p1,p2){

  if (p1.x - p2.x < p2.width/2 + p1.width/2
    && p2.x -p1.x < p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2) {
  return true
}
else {
  p1.shapeColor = "green";
  p2.shapeColor = "green";
}


}