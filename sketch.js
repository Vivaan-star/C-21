//var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  /*
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true; 
  */

  gameObject1 = createSprite(600,100,70,70);
  gameObject1.shapeColor = "green";
  gameObject1.velocityY = 4;
  gameObject2 = createSprite(600,500,70,70);
  gameObject2.shapeColor = "red";
  gameObject2.velocityY = -4;


 /* 
  gameObject3 = createSprite(300,100,70,70);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400,100,70,70);
  gameObject4.shapeColor = "green";
 */
  //gameObject1.x - gameObject2.x < gameObject2.width/2 + gameObject1.width/2
  //&& gameObject2.x - gameObject1.x < gameObject2.width/2 + gameObject1.width/2

}

function draw() {
  background(0,0,0);  
 
  bounceOff(gameObject1, gameObject2);

  drawSprites();
}


