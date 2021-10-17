const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var snowflake1;
var snowflake2;
var snowflake3;
var snowflake4;
var snowflake5;
var snowflake6;
var backgroundImg;

function preload(){
  backgroundImg = loadImage("snow2.jpg");
}

function setup(){
  var canvas = createCanvas(800,500);
  engine = Engine.create();
  world = engine.World;
  snowflake1 = new Snowflake(random(50,750), 50, 30, 30);
  snowflake2 = new Snowflake(random(50,750), 50, 30, 30);
  snowflake3 = new Snowflake(random(50,750), 50, 30, 30);
  snowflake4 = new Snowflake(random(50,750), 50, 30, 30);
  snowflake5 = new Snowflake(random(50,750), 50, 30, 30);
  snowflake6 = new Snowflake(random(50,750), 50, 30, 30);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  snowflake1.display();
  drawSprites();
}