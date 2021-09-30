const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;
var options=
{
isStatic: true
}


function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //create player base body
playerBase = Bodies.rectangle(200,350,180,150,options)
World.add(world,playerBase);
  //create player body
player = Bodies.rectangle(225,playerBase.position.y-80,50,100,options)
World.add(world,player);


}

function draw() {
  background(backgroundImg);


image(baseimage,playerBase.position.x,playerBase.position.y,100,150)
image(playerimage,player.position.x,player.position.y,50,100)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
