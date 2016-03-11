var model = {
  score: 0,
  highScore: 0,
  totalEnemies: 0,
  avatar: new Avatar()
};

function Avatar() {
  this.hp = 100;
  this.damage = 1;
  this.x = 0;
  this.y = 0;
  this.size = 25;
}
