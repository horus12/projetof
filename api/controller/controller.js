'use strict';

let userUseCase = require('../useCase/createUser');
let loginUseCase = require('../useCase/login');
let createResearch = require('../useCase/createResearch');
let getResearch = require('../useCase/getResearch');

let mongoose = require('mongoose'),
    User = mongoose.model('user');

exports.createUser = function (req, res) {

    userUseCase.createUserUseCase(req, res)

};

exports.login = function (req, res) {
    loginUseCase.login(req, res)
};

exports.createResearch = function (req, res) {
    createResearch.createResearch(req, res)
};

exports.getResearch = function(req,res){
    getResearch.getResearch(req, res)
};

exports.getResearchById = function(req,res){
    getResearch.getResearchById(req,res)
};