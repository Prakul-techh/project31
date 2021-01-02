const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,division,particle,plinko;
var divisionHeight=300;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(600,height,800,20);
  diviion=new Divisions(x,y,w,h);
  particle=new Particle(x,y,w,h);
  plinko=new Plinko(x,y,w,h)
}

function draw() {
  background(0); 
  Engine.update(engine); 
ground.display();
division.diplay();
particle.diplay();
plinko.display();
}

for(var k=0;k<=width; k+80){
  division.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}

if (frameCount%60===0){
  particle.push(new Particle(random(width/2-10,width/2+10),10,10));
}

for (var j=40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,75));
}
for(var j=15;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,175));
}