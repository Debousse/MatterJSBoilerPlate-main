
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;

function setup() {
	createCanvas(700,350);
	engine = Engine.create();
	world = engine.world;

	var ground = createSprite(350,345,700,5);
    World.add(world,ground);

	var ball_options = {
	  isStatic:false,
	  friction:0,
	}
	
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	var rect_options = {
		isStatic:true
	}

	ground = Bodies.rectangle(350,345,1000,10,rect_options);
	World.add(world,ground);

	wall1 = Bodies.rectangle(600,330,10,90,rect_options);
	World.add(world,wall1);

	wall2 = Bodies.rectangle(500,330,10,90,rect_options);
	World.add(world,wall2);
   
	rectMode(CENTER);
	ellipseMode(RADIUS);
  }


function draw() {

  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  rect(wall1.position.x,wall1.position.y,10,90);
  rect(wall2.position.x,wall2.position.y,10,90);
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);

  Engine.update(engine);
}


function keyPressed()
{
  if(keyDown ("SPACE"))
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05},70);
    }
}



