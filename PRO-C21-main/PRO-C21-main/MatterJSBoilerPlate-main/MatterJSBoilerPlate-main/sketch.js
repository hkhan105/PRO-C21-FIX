
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var leftSide;
var rightSide;
var groundObj;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	ball = Bodies.circle(300, 100, 20, ball_options);
	World.add(world,ball);

	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1200,600,20,120);

	ellipseMode(RADIUS);
	rectMode(CENTER);
	Engine.run(engine);
  
}


function draw() {
  background(0);

  ellipse(ball.position.x, ball.position.y, 20, 20)
  
  groundObj.display()
  leftSide.display()
  rightSide.display()
 

  keyPressed()
  

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){

	Matter.Body.applyForce(ball, ball.position,{x:3,y:-4})
	}
}
