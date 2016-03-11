var controller = {
  init: function() {
    view.init();
  },

  update: function() {

  },

  getAvatar: function() {
    return model.avatar;
  },

  moveAvatar: function(dir) {
    model.avatar.move(dir);
  }
};

$(document).ready(function() {
  controller.init();
});
