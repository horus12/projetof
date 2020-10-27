'use strict';
module.exports = function(app) {
  var userController = require('../controller/userController');

  // user Routes
  app.route('/user')
    .post(userController.createUser);
    
};