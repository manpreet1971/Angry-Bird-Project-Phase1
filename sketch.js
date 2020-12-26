const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
var myEngine,myWorld,box1,ground;
function setup()
{
  var canvas=createCanvas(1200,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;
  ground=new Ground(width/2,height-40,width,20);
  bird=new Bird(50,50);

  box1=new Box(700,320,70,70);
  box2=new Box(900,320,70,70);
  
  log1=new Log(800,300,400,PI/2);

  box3=new Box(700,250,70,70);
  box4=new Box(900,250,70,70);
  log2=new Log(800,150,400,-PI/2);

  box5=new Box(800,120,60,60);
  log3=new Log(750,120,180,PI/7);
  log4=new Log(860,120,180,-PI/7);

 
  pig1=new Pig(800,350);
  pig2=new Pig(800,250);

}
function draw()
{
  background("green");
  Engine.update(myEngine);

  ground.display();
  
  bird.display();

  box1.display();
  box2.display();
  log1.display();

  box3.display();
  box4.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();
  pig1.display();
  pig2.display();
}