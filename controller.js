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

  // Moves the avatar in the new "dir"
  moveAvatar: function(dir) {
    model.avatar.move(dir);
  },

  // Makes the avatar launch a bullet
  avatarFireBullet: function() {
    model.avatar.fire();
  }
};

// Run the game
$(document).ready(function() {
  controller.init();
});
