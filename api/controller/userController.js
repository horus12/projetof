'use strict';

var userUseCase = require('../useCase/createUser');
var mongoose = require('mongoose'),
  User = mongoose.model('user');

  exports.createUser = function(req, res) {
    
    userUseCase.createUserUseCase(req,res)
    
  };