var fixedRect,movingRect,rect1;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  //fixedRect.velocityX = 3;
  movingRect= createSprite(400, 200, 80, 30);
  //movingRect.velocityX = -3;
  rect1=createSprite(300,200,50,50);

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

/*if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2) {
    fixedRect.velocityX =fixedRect.velocityX*-1;
    movingRect.velocityX=movingRect.velocityX*-1;
  }
  if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
      fixedRect.velocityY=fixedRect.velocityY*-1;
      movingRect.velocityY=movingRect.velocityY*-1;
    }*/
  
  if(isTouching(movingRect,rect1)){
    movingRect.shapeColor="red"
    rect1.shapeColor="red"

  }
  else
  {
    movingRect.shapeColor = "green";
    rect1.shapeColor="green"
  }
  drawSprites();
}

