var model = {
  score: 0,
  highScore: 0,
  totalEnemies: 0,
  avatar: new Avatar()
};

function Avatar() {
  // Avatar stats
  this.hp = 100;
  this.damage = 1;

  // Position
  this.x = view.max / 2;
  this.y = view.max - 50;

  // Movement Speed
  this.dx = 5;
  this.dy = 5;

  //Size and Bitmap image
  this.size = 50;
  this.image = new Image();
  this.image.src = "images/charizard.jpg";

  this.draw = function(context) {
    context.drawImage(this.image, this.x, this.y, this.size, this.size);
  };

  this.move = function(dir) {
    var LEFT = 97, UP = 119, RIGHT = 100, DOWN = 115;
    if (dir == LEFT) this.x -= this.dx;
    else if (dir == RIGHT) this.x += this.dx;
    else if (dir == UP) this.y -= this.dy;
    else if (dir == DOWN) this.y += this.dy;

    // contrains avatar's position to never move off the grid
    this.x = Math.max(0, Math.min(this.x, view.max - this.size));
    this.y = Math.max(0, Math.min(this.y, view.max - this.size));
  };
}
