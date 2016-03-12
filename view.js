// The "V" in MVC, does rendering, eventhandlers,
// and runs appropriate controller response to those events
var view = {
  // Dimensions of the canvas in pixels
  max: 800,
  previousTime: 0,
  // Initialize game loop
  init: function() {
    var INTERVAL = 30; // Set pace of game, 30 ~ 30 frames per second
    // Attach eventListener for hitting spacebar for firing
    view.fireListener();

    window.onload = function() {
      var canvas = $("#canvas")[0],
        c = canvas.getContext("2d");
      // THE GAME LOOP BABY
      setInterval(function() {
        var currentTime = new Date().getTime();

        view.update(currentTime);
        view.renderAvatar(canvas);
        view.renderBullets(canvas);
        view.renderEnemies(canvas);
      }, INTERVAL);
    };
  },

  // Renders the game board state on canvas
  renderAvatar: function(canvas) {
    // supercharge canvas element and clean it out
    var c = canvas.getContext("2d");
    view.clearCanvas(canvas);

    // retrieve avatar object from controller
    var avatar = controller.getAvatar();
    // render avatar
    avatar.draw(c);
  },

  renderBullets: function(canvas) {
    var c = canvas.getContext("2d");
    // retrieve bullet objects from controller
    var bullets = controller.getBullets();
    // render bullets
    for (var b in bullets) {
      bullets[b].draw(c);
    }
  },

  renderEnemies: function(canvas) {
    var c = canvas.getContext("2d");
    // retrieve enemy objects from controller
    var enemies = controller.getEnemies();
    // render enemies
    for (var b in enemies) {
      enemies[b].draw(c);
    }
  },

  // Cleans out the current canvas
  clearCanvas: function(canvas) {
    var c = canvas.getContext("2d");
    c.beginPath();
    c.rect(0,0,view.max,view.max);
    c.fillStyle = "white";
    c.fill();
  },

  // Main update function
  update: function(currentTime) {
    var LEFT = 97, UP = 119, RIGHT = 100, DOWN = 115; // WASD keys
    controller.generateEnemy(currentTime);
    controller.updateEnemies();
    // Avatar movement
    if (key.isPressed("A")) controller.updateAvatar(LEFT);
    if (key.isPressed("D")) controller.updateAvatar(RIGHT);
    if (key.isPressed("W")) controller.updateAvatar(UP);
    if (key.isPressed("S")) controller.updateAvatar(DOWN);
    // Update bullet locations
    if (controller.getBullets) controller.updateBullets();
  },

  fireListener: function() {
    // Avatar launching fireball on hitting spacebar
    $(document).on("keydown", function(e) {
      if (e.keyCode == 32) controller.avatarFire();
    });
  }
};
