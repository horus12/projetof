'use strict';

const {syncIndexes} = require('../domain/user');

const mongoose = require('mongoose'), User = mongoose.model('user');
const bcrypt = require('bcrypt');

exports.findUser = (req,callback) => {
    User.findOne({'email': req})
        .then(user => {
            callback = !!user;
        })
}