const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
   }

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1=new Box(900,365,50,50)
    box2=new Box(900,365,50,50)
    box3=new Box(900,365,50,50)
    box4=new Box(900,365,50,50) 
    box5=new Box(900,365,50,50)
    box6=new Box(900,365,50,50)

    box7=new Box(840,365,50,50)
    box8=new Box(840,365,50,50)
    box9=new Box(840,365,50,50)
    box10=new Box(840,365,50,50) 
    box11=new Box(840,365,50,50)
    box12=new Box(840,365,50,50)

    
    ball=new Ball(700,290)

     sling=new Slingshot(ball.body,{x:700,y:0})
    
}
function draw(){
    background("black")
   Engine.update(engine);
    strokeWeight(0);
    ground.display();
    fill ("orange")
    box1.display();
    fill ("yellow")
    box2.display();
    fill("orange");
    box3.display();
    fill ("yellow");
    box4.display();
    fill ("orange");
    box5.display();
    fill ("yellow")
    box6.display();
    fill ("orange");
    box7.display();
    fill ("yellow");
    box8.display();
    fill ("orange");
    box9.display();
    fill ("yellow");
    box10.display();
    fill ("orange");
    box11.display();
    fill ("yellow");
    box12.display();

    fill("lightBlue");
    ball.display();

    sling.display();


}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}