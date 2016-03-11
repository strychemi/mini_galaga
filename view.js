var view = {
  max: 800,

  init: function() {
    var previousTime = 0,
      INTERVAL = 30;

    window.onload = function() {
      var canvas = $("#canvas")[0],
        c = canvas.getContext("2d");

      view.render(canvas);
    };
  },

  render: function(canvas, timeElapsed, currentTime) {
    // supercharge canvas element and clean it out
    var c = canvas.getContext("2d");
    //view.clearCanvas(canvas);

    // retrieve avatar object from controller
    var avatar = controller.getAvatar();

    // render avatar
    c.beginPath();
    console.log(avatar.x, avatar.y, avatar.size, avatar.size);
    c.rect(avatar.x, avatar.y, avatar.size, avatar.size);
    c.fillStyle = "red";
    c.fill();
  },

  clearCanvas: function(canvas) {
    var c = canvas.getContext("2d");
    c.beginPath();
    c.rect(0,0,view.max,view.max);
    c.fillStyle = "white";
    c.fill();
  }
};
