var player;
var menu;
var world;
var battle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  player = new Player(0, 0, 20, 1, 0, new Items(0, 0), 0, 1);
  menu = "world";
  world = new World();
  battle = new Battle();
}

function draw() {
  if(menu === "world") {
    world.run();
  }
  
  if(menu === "battleinit") {
    battle = new Battle();
    menu = "battle";
  }
  
  if(menu === "battle") {
    battle.run();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
