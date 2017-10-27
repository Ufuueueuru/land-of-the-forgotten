function World() {
  this.run = function() {
    background(255, 255, 255);
    player.draw();
    for(var i = 0;i < overworld.length;i ++) {
      for(var u = 0;u < overworld[i].length;u ++) {
        fill(100, 100, 100);
        textSize(20);
        text(overworld[i][u], u * 20, i * 20 + 20);
      }
    }
  }
}
