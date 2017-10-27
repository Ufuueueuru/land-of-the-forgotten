function World(map) {
  this.map = map;
  this.run = function() {
    background(255, 255, 255);
    player.draw();
    for(var i = 0;i < this.map.length;i ++) {
      for(var u = 0;u < this.map[i].length;u ++) {
        fill(100, 100, 100);
        textSize(20);
        text(this.map[i][u], u * 20, i * 20 + 20);
      }
    }
  }
}
