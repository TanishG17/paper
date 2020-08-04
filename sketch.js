var ball, left,right, bottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

ball = createSprite(150,500,30,30);
left = createSprite(590,500,10,80);
right = createSprite(750,500,10,80);
bottom = createSprite(670,540,160,10);
if(keyDown("TOP_ARROW")){
	ball.velocityY = -5;
}

  drawSprites();
 
}



