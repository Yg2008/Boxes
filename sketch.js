const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2;

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(displayWidth/2,displayHeight-50,displayWidth,30);
    box1 = new Box(240,300,50,50);
    box2 = new Box(200,100,50,100);

}

function draw(){
    background("lightblue");
    Engine.update(engine);
    
    ground.display();
    box1.display();
    box2.display();

}