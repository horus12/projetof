'use strict';

const {syncIndexes} = require('../domain/user');

const mongoose = require('mongoose'), User = mongoose.model('user');
const bcrypt = require('bcrypt');

exports.createUserUseCase = (req, res) => {

    User.findOne({'email': req.body.email})
        .then(user => {

            if (user) {
                res.status(403).json({success: false, message: 'This username has no available'});
            } else {
                bcrypt.hash(req.body.password, 10)
                    .then(hash => {

                        let encryptedPassword = hash;

                        let newUser = new User({
                            email: req.body.email,
                            password: encryptedPassword,
                            cpf: req.body.cpf
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