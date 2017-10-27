function Player(x, y, life, attack, armor, items, exp, level) {
  this.x = x;
  this.y = y;
  this.life = life;
  this.attack = attack;
  this.armor = armor;
  this.items = items;
  
  this.draw = function() {
    fill(0, 0, 0);
    textSize(20);
    text("@", this.x * 20, this.y * 20 + 20);
  }
}
