
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var top_wall;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ball_options={
    restitution:0.95
  }
 
  btn2=createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
  ball=Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);

  var options={
pointA:{x:200,y:20},
bodyB:ball,
length:100,
stiffness:0.1
  }

con=Matter.Constraint.create(options);
World.add(world,con);

  ground =new Ground(200,390,400,20);
 
 top_wall = new Ground(50,200,30,20);
 
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);

  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)

  ground.show();
  top_wall.show();
 
  Engine.update(engine);


ellipse(ball.position.x,ball.position.y,20);

}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

