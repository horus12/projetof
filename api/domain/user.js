'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var user = new Schema({
  name: {
    type: String,
    required: 'needs a name'
  },
  password: {
      type: String,
      required: 'needs a password'
  }
});

module.exports = mongoose.model('user', user);