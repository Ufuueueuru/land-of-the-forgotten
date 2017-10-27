var player;
var menu;
var world;
var battle;
var keys = [];
var overworld = [
  [".",".",".",".",",",".",".",".",".","."],
  [".",";",";",",",",",",",",",",",",",","],
  [".",":",";",".",",",".",".",".",".","."],
  [".",".",".",",",".",".",".",".",".",","],
  [".",".",".",".",",",".",".",".",".","."],
  [".",".",".",".",",",".",".",".",".","."],
  [".",".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".",".","."]
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  player = new Player(0, 0, 20, 1, 0, new Items(0, 0), 0, 1);
  menu = "world";
  world = new World();
  battle = new Battle();
}

function draw() {
  background(255, 255, 255);
  world.run();//debug purposes
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

function keyPressed() {
  keys[keyCode] = true;
}

function keyReleased() {
  //keys[keyCode] = false;
}

function keyTyped() {
  if(menu === "world") {
    if(key === 'w') {
      player.y --;
    }
    if(key === 's') {
      player.y ++;
    }
    if(key === 'a') {
      player.x --;
    }
    if(key === 'd') {
      player.x ++;
    }
  }
  
  if(menu === "battle") {
    
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
