'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let research = new Schema({
    userId: {type: String, required: 'needs a valid userId'},
    title: {type: String, required: 'needs a password'},
    description: {type: String},
    participants: [{
        type: String
    }],
    asks: [{
        title: {type: String, required: 'needs a title this question'},
        description: {type: String},
        type: {type: String, required: 'needs a type of question'},
        required: {type: Boolean, required: 'needs required true or false'}
    }],
    createdDate:{type: Date},
    endDate:{type:Date},
    active: {type: Boolean}
});

module.exports = mongoose.model('research', research);