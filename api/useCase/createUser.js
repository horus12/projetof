'use strict';

const { syncIndexes } = require('../domain/user');

var mongoose = require('mongoose'),
User = mongoose.model('user');


exports.createUserUseCase = function(req, res) {

    
    User.findOne({name:req.body.name}, function(err,user){
        console.log(user)
        if(err)
            res.send(err);
        if(user.name === req.body.name){
            res.status(400).send("user already exist");
            return
        }
        
    });

    var newUser = new User(req.body);
    newUser.save(function(err, user) {
      if (err)
        res.send(err);
      res.status(200).send("User created")
    });

}