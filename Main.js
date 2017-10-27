function setup() {
  createCanvas(windowWidth, windowHeight);
  
  var player = new Player(0, 0, 20, 1, 0, new Items(0, 0), 0, 1);
  var menu = "world";
  var world = new World();
  var battle = new Battle();
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
