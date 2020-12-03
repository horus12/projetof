'use strict';

const {syncIndexes} = require('../domain/user');

const mongoose = require('mongoose'), User = mongoose.model('user');
const bcrypt = require('bcrypt');

exports.login = (req, res) => {
    User.findOne({'email': req.body.email})
        .then(user => {

            if (user) {
                bcrypt.compare(req.body.password, user.password, function (err, isMatch) {
                    if (err) {
                        res.status(500).json({success: false, message: err})
                    } else if (!isMatch) {
                        res.status(403).json({success: false, message: "wrong password or username"});
                    } else {
                        res.status(200).json({success: true, accessToken: user.cpf, name: user.name});
                    }
                })

            } else {
                res.status(404).json({success: false, message: "user not found"})
            }
        })
}