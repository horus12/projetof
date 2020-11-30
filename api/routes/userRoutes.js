'use strict';
module.exports = function(app) {
  const userController = require('../controller/userController');

  // user Routes
  app.route('/user')
      .post(userController.createUser);

  app.route('/login')
      .post(userController.login);

  app.route('/research')
      .post(userController.createResearch)
    
};
  