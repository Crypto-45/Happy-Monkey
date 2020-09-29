var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var score;
var monkey;
var ground,groundImage;
var bananaGroup;
var obstacleGroup;
var PLAY = 1;
var END = 0;
var gamestate = 1;
var obstacleGroup;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}

function setup() {
  createCanvas(500,400)
  monkey = createSprite(60,300)
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.10
  bananaGroup = new Group();
  obstacleGroup = new Group();
  ground = createSprite(250,340,600,20);
  
}


function draw() {
background("cyan");
if(gamestate == 1){
  ground.velocityX = -5; 
  if(ground.x<200){
    ground.x = 250;
  }
   if(monkey.isTouching(obstacleGroup)){
      gamestate = 0
  }
  if(monkey.isTouching(bananaGroup)){
    score = score+1;
    bananaGroup.destroyEach();
  }
   monkey.collide(ground);
   monkey.velocityY = monkey.velocityY + 0.50; 
  spawnObstacle();
  spawnBanana();
}
  if(gamestate == 0){
    obstacle.velocityX = 0;
    obstacle.lifetime = -1;
    ground.velocityX = 0;
    monkey.destroy();
    fill("black");
    text("GAME OVER",175,200);
  }
if(keyDown("SPACE")){
    monkey.velocityY = -9;
}
  drawSprites();
  fill("black");
  text("SCORE = "+score,180,50);
}
function spawnObstacle(){;
if(frameCount%100 == 0){
  obstacle = createSprite(450,313,50,50);
  obstacle.velocityX = -7;
  obstacle.lifetime = 80;
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.10;
  obstacleGroup.add(obstacle);
  }  
}
function spawnBanana(){
  if(frameCount%60 == 0){
    banana = createSprite(400,200)
    banana.velocityX = -10;
    banana.addImage(bananaImage); 
    banana.lifetime = 80;
    banana.scale = 0.15;
    bananaGroup.add(banana);
  }
}



