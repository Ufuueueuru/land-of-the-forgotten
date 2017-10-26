function Player(x, y, life, attack, armor, items, exp, level) {
  this.x = x;
  this.y = y;
  this.life = life;
  this.attack = attack;
  this.armor = armor;
  this.items = items;
  
  this.draw = function() {
    fill(0, 0, 0);
    text("@", this.x, this.y);
  }
  
  this.move = function(dir) {
    if(dir === 0) {
      this.x ++;
    }
    if(dir === 1) {
      this.y --;
    }
    if(dir === 2) {
      this.x --;
    }
    if(dir === 3) {
      this.y ++;
    }
  }
}
