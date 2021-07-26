var mountain1, mountain1Img, mountain2;
var mountain2Img, mountain3, mountain3Img;
var mountain4, mountain4Img, p, pImg;
var gameState = "play";

function preload(){
  mountain1Img=loadImage("mountain1.png");
  mountain2Img=loadImage("mountain2.png");
  mountain3Img=loadImage("mountain3.png");
  mountain4Img=loadImage("mountain4.png");
  pImg=loadImage("plane.png");
  
}

function setup() {
  createCanvas(400, 400);
  
  p=createSprite(200, 200, 30, 30);
  p.addImage(pImg);
  p.scale=0.6;
  
  mountain1Group = new Group();
  mountain2Group = new Group();
  mountain3Group = new Group();
  mountain4Group = new Group();
  
}

function draw() {
 background("white");
  
  if(gameState==="play"){
    
    if(keyDown("up_arrow")){
      p.y=p.y+2;
    }
    
    if(keyDown("down_arrow")){
      p.y=p.y+-2;
    }
    
    if(mountain1Group.isTouching(p)){
      p.destroy();
      gameState= "end";
    }
    
    if(mountain2Group.isTouching(p)){
      p.destroy();
      gameState= "end";
    }
    
    if(mountain3Group.isTouching(p)){
      p.destroy();
      gameState= "end";
    }
   
    if(mountain4Group.isTouching(p)){
      p.destroy();
      gameState= "end";
    }
     }
  
  if (gameState === "end"){
    stroke("red");
    fill("yellow");
    textSize(30);
    text("Game Over", 200,200)
  }

  
  spawnMountain1();
  spawnMountain2();
  spawnMountain3();
  spawnMountain4();
  
  
  drawSprites();
}

 function spawnMountain1(){
   if (frameCount % 40 === 0) {
     mountain1 = createSprite(250,325,20,20);
     mountain1Group.add(mountain1);
    mountain1.addImage(mountain1Img);
    mountain1.velocityX = -3;
    mountain1.scale=0.1;
     mountain1.lifetime=80;
   }
   
 }

 function spawnMountain3(){
   if (frameCount % 600 === 0) {
     mountain3 = createSprite(250,325,20,20);
     mountain3Group.add(mountain3);
    mountain3.addImage(mountain3Img);
    mountain3.velocityX = -3;
    mountain3.scale=0.1;
     mountain3.lifetime=80;
   }
   
 }

 function spawnMountain2(){
   if (frameCount % 900 === 0) {
     mountain2 = createSprite(250,325,20,20);
     mountain2Group.add(mountain2);
    mountain2.addImage(mountain2Img);
    mountain2.velocityX = -3;
    mountain2.scale=0.1;
     mountain2.lifetime=80;
   }
   
 }

 function spawnMountain4(){
   if (frameCount % 1200 === 0) {
     mountain4 = createSprite(250,325,20,20);
     mountain4Group.add(mountain4);
    mountain4.addImage(mountain4Img);
    mountain4.velocityX = -3;
    mountain4.scale=0.1;
     mountain4.lifetime=80;
   }
   
 }

