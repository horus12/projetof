'use strict';

const {syncIndexes} = require('../domain/user');

const mongoose = require('mongoose'), User = mongoose.model('user');
const bcrypt = require('bcrypt');

function findUser(req,fn) {
    User.findOne({cpf: req}, function (err, user) {
        if (err) return fn(false);
        fn(user != null);
    });
}

module.exports = {findUser: findUser}