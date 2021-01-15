const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() 
{
  createCanvas(3000, 800);
 
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  box1 = new Building(900, 100, 100, 100);

  ball1 = new Ball(200, 200, 80, 80);
}

function draw()
 {
  background(0);
  
  Engine.update(engine);

  ground.display();

  box1.display();

  ball1.display();
}
