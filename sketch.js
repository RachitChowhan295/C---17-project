var ground,bananay;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,400);
  
  monkey = createSprite(100,200,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(250,385,500,10);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
}

function draw() {
background (240);
  
  monkey.velocityY = monkey.velocityY + 1;
  monkey.collide(ground);
  
  if (keyDown("space") && monkey.y>349){
    monkey.velocityY = -19
}
  
  ground.velocityX = -5;
  ground.x = ground.width/2;
  
  score = Math.round(score + getFrameRate()/60)

  textSize (20);
  text ("Survival Time = " + score ,160,25);
  
  food();
  obstacles();
  
  drawSprites();
}

function food(){
  if (frameCount % 80 === 0){
    bananay = Math.round(random(150,230));
    
    banana = createSprite(500,bananay,20,20);
    banana.addImage("banana",bananaImage);
    banana.scale = 0.08;
    
    banana.velocityX = -4;
    banana.lifetime = 130;
    FoodGroup.add(banana);
  }
}

function obstacles(){
  if (frameCount % 300 ===0){
    obstacle = createSprite(500,360,20,20);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -7;
    obstacle.lifetime = 135;
    obstacleGroup.add(obstacle);
  }
}
