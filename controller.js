var controller = {
  init: function() {
    view.init();
  },

  update: function() {

  },

  getAvatar: function() {
    return model.avatar;
  }
};

$(document).ready(function() {
  controller.init();
});
