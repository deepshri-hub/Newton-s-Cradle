const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    
    ball1=new Ball(200,100,100,100);
    ball2=new Ball(400,200,100,100);
    ball3=new Ball(600,300,100,100);
    ball4=new Ball(800,400,100,100);
    ball5=new Ball(1000,500,100,100)

    Rope1=new Rope(ball.body,{x:500,y:50});
} 

function draw(){
    background(0);
    Engine.update(engine);

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();


    Rope1.display();

}

function mouseDragged(){

Matter.Body.setPostion(ball.body,{x:mouseX,y:mouseY}); 

}