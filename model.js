// The "M" in MVC, acts like database for game
var model = {
  score: 0,
  highScore: 0,
  totalEnemies: 0,
  avatar: new Avatar(),
  bullets: [],

  // Creates a new bullet and adds it to the bullets array
  avatarFire: function() {
    model.bullets.push(new Bullet());
  },

  // Moves all bullets up
  moveBullets: function() {
    var allBullets = model.bullets;
    for (var b in allBullets) {
      allBullets[b].y -= allBullets[b].dy;
      if (allBullets[b].y <= -20) {
        allBullets.splice(b, 1);
      }
    }
  }
};

function Avatar() {
  // Avatar stats
  this.hp = 100;
  this.damage = 1;

  // Position
  this.x = view.max / 2;
  this.y = view.max - 50;

  // Movement Speed or step size
  this.dx = 10;
  this.dy = 10;

  // Size and Bitmap image
  this.size = 50;
  this.image = new Image();
  this.image.src = "images/charizard.jpg";

  // Renders the avatar image on the passed context, which should be a canvas
  this.draw = function(context) {
    context.drawImage(this.image, this.x, this.y, this.size, this.size);
  };

  // Updates the current position of the avatar
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

function Bullet() {
  // Starting position
  this.x = model.avatar.x + 20;
  this.y = model.avatar.y;

  // Movement Speed or step size
  this.dx = 0;
  this.dy = 10;

  // Size and Bitmap image
  this.sizeX = 10;
  this.sizeY = 20;
  this.image = new Image();
  this.image.src = "images/fireball.png";

  // Renders the bullet image on the passed context, which should be a canvas
  this.draw = function(context) {
    context.drawImage(this.image, this.x, this.y, this.sizeX, this.sizeY);
  };
}
