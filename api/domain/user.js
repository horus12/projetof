'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let user = new Schema({
    email: {
        type: String,
        required: 'needs a email',
        unique: true
    },
    password: {
        type: String,
        required: 'needs a password'
    },
    cpf: {
        type: String,
        required: 'needs a password',
        unique: true
    },
    name: {type: String, required: 'needs a name'}

});

module.exports = mongoose.model('user', user);