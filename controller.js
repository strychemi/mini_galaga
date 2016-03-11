// The "C" in MVC, acts like middle man between model and view
var controller = {
  // Initialize the view, which has the eventhandlers and gameloop
  init: function() {
    view.init();
  },

  // Returns the avatar object
  getAvatar: function() {
    return model.avatar;
  },

  // Returns an array of bullet objects
  getBullets: function() {
    return model.bullets;
  },

  // Moves the avatar in the new "dir"
  update: function(dir) {
    model.avatar.move(dir);
    model.moveBullets();
  },

  // Makes the avatar launch a new bullet
  avatarFire: function() {
    model.avatarFire();
  }
};

// Run the game
$(document).ready(function() {
  controller.init();
});
