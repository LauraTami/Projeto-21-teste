
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var RightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	groundObj=new ground(width/2, 670,width, 20);
	leftSide=new ground(1100, 600, 20, 120);
	rightSide=new ground(1350, 600, 20, 120);


	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}

	//Create the Bodies Here.

	Ball=Bodies.circle(400,400,20,ball_options);
	World.add(world, ball);

	Engine.run(engine);
	rectMode(CENTER);
  
}


function draw() {
  background("black");
  
  groundObj.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
  ellipse(ball.position.x,ball.position.y, 20,20);
 
}



