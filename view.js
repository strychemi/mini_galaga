var view = {
  max: 800,

  init: function() {
    var previousTime = 0,
      INTERVAL = 15;

    window.onload = function() {
      var canvas = $("#canvas")[0],
        c = canvas.getContext("2d");

      // THE GAME LOOP BABY
      setInterval(function() {
        var currentTime = new Date().getTime().timeElapsed;
        if (previousTime === 0) previousTime = currentTime;
        timeElapsed = currentTime - previousTime;
        view.update();
        view.render(canvas, timeElapsed, currentTime);
      }, INTERVAL);
    };
  },

  render: function(canvas, timeElapsed, currentTime) {
    // supercharge canvas element and clean it out
    var c = canvas.getContext("2d");
    view.clearCanvas(canvas);

    // retrieve avatar object from controller
    var avatar = controller.getAvatar();

    // render avatar
    // c.beginPath();
    // c.rect(avatar.x, avatar.y, avatar.size, avatar.size);
    // c.fillStyle = "red";
    // c.fill();
    avatar.draw(c);
  },

  clearCanvas: function(canvas) {
    var c = canvas.getContext("2d");
    c.beginPath();
    c.rect(0,0,view.max,view.max);
    c.fillStyle = "white";
    c.fill();
  },

  update: function() {
    var LEFT = 97, UP = 119, RIGHT = 100, DOWN = 115; // WASD keys
    // var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40; // Arrow keys

    // $(document).on("keypress", function(e) {
    //   if (e.keyCode == LEFT) controller.moveAvatar(LEFT);
    //   if (e.keyCode == RIGHT) controller.moveAvatar(RIGHT);
    //   if (e.keyCode == UP) controller.moveAvatar(UP);
    //   if (e.keyCode == DOWN) controller.moveAvatar(DOWN);
    // });

    // Implementing key polling
    if (key.isPressed("A")) controller.moveAvatar(LEFT);
    if (key.isPressed("D")) controller.moveAvatar(RIGHT);
    if (key.isPressed("W")) controller.moveAvatar(UP);
    if (key.isPressed("S")) controller.moveAvatar(DOWN);

  }
};
