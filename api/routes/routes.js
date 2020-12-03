'use strict';
module.exports = function(app) {
  const controller = require('../controller/controller');

  // user Routes
  app.route('/user')
      .post(controller.createUser);

  app.route('/login')
      .post(controller.login);

  app.route('/research')
      .post(controller.createResearch)
      .get(controller.getResearch)
      .put(controller.addNewParticipants)

  app.route('/research/:researchId')
      .get(controller.getResearchById)

};
  