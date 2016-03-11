// The "V" in MVC, does rendering, eventhandlers,
// and runs appropriate controller response to those events
var view = {
  // Dimensions of the canvas in pixels
  max: 800,

  // Initialize game loop
  init: function() {
    var INTERVAL = 30;
    // Attach eventListener for hitting spacebar for firing
    view.fireListener();

    window.onload = function() {
      var canvas = $("#canvas")[0],
        c = canvas.getContext("2d");
      // THE GAME LOOP BABY
      setInterval(function() {
        view.update();
        view.renderAvatar(canvas);
        view.renderBullets(canvas);
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

  // Cleans out the current canvas
  clearCanvas: function(canvas) {
    var c = canvas.getContext("2d");
    c.beginPath();
    c.rect(0,0,view.max,view.max);
    c.fillStyle = "white";
    c.fill();
  },

  // Update movement based on key polling (so multiple keys can be pressed)
  update: function() {
    var LEFT = 97, UP = 119, RIGHT = 100, DOWN = 115; // WASD keys
    // Avatar movement
    if (key.isPressed("A")) controller.update(LEFT);
    if (key.isPressed("D")) controller.update(RIGHT);
    if (key.isPressed("W")) controller.update(UP);
    if (key.isPressed("S")) controller.update(DOWN);

    if (controller.getBullets) controller.update();
  },

  fireListener: function() {
    // Avatar launching fireball on hitting spacebar
    $(document).on("keydown", function(e) {
      if (e.keyCode == 32) controller.avatarFire();
    });
  }
};
