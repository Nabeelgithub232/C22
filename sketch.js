const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var ground,ball

function setup() {
  createCanvas(800,400);
 
engine = Engine.create()
world = engine.world;
ground = Bodies.rectangle(200,390,200,20,{isStatic:true})
World.add(world,ground)

ball = Bodies.circle(250,20,30,{restitution:1})
World.add(world,ball)


}

function draw() {
  Engine.update(engine)
  background("black")
 fill("green")
  rect(ground.position.x,ground.position.y,390,20)
  fill("red")
  ellipse(ball.position.x,ball.position.y,30,30)
}


