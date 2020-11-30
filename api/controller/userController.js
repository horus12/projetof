'use strict';

let userUseCase = require('../useCase/createUser');
let loginUseCase = require('../useCase/login');
let mongoose = require('mongoose'),
    User = mongoose.model('user');

exports.createUser = function (req, res) {

    userUseCase.createUserUseCase(req, res)

};

exports.login = function (req, res) {
    loginUseCase.login(req, res)
};