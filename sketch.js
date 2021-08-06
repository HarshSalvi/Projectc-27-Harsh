
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var hammer;
var rubber;
var stone;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
     ground = new Ground(400,690,900,50);
	 hammer = new Hammer(100,100,200,100);
   rubber=new Rubber(200,500,20);
   stone=new Stone(500,50,100,100);
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  ground.display();
  hammer.display();
  rubber.display();
  stone.display();
  
  drawSprites();
 
}



