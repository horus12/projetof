'use strict';

const {syncIndexes} = require('../domain/user');

const mongoose = require('mongoose'), User = mongoose.model('user');
const bcrypt = require('bcrypt');

exports.createUserUseCase = (req, res) => {

    User.findOne({'name': req.body.name})
        .then(user => {

            if (user) {
                res.status(403).json({success: false, message: 'This username has no available'});
            } else {
                bcrypt.hash(req.body.password, 10)
                    .then(hash => {

                        let encryptedPassword = hash;

                        let newUser = new User({
                            name: req.body.name,
                            password: encryptedPassword
                        });

                        newUser.save()
                            .then(() => res.status(201).json({
                                success: true,
                                message: 'User created with success'
                            }))
                            .catch(err => res.status(500).json({success: false, message: err, statusCode: 500}));
                    })
                    .catch(err => res.status(500).json({success: false, message: err, statusCode: 500}));
            }
        })

}