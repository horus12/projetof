'use strict';

const sendEmail = require('./sendEmail');
let findUser = require('../useCase/findUser');
const {isNullOrUndefined} = require('mongoose')

const {syncIndexes} = require('../domain/user');
const bcrypt = require('bcrypt');


const mongoose = require('mongoose'), Research = mongoose.model('research');
const User = mongoose.model('user');
exports.createResearch =  (req, res) => {
    User.findOne({'cpf': req.body.userId})
        .then(user => {

            if (user) {
                const aux = req.body
                let research = new Research({
                    userId: aux.userId,
                    title: aux.title,
                    description: aux.description,
                    participants: aux.participants,
                    asks: aux.asks,
                    createdDate: new Date(),
                    endDate: new Date(),
                    active: aux.active
                });
                sendEmail.sendEmail(aux.participants,aux.title)

                research.save()
                    .then(() => res.status(201).json({
                        success: true,
                        message: 'Research was created with success'
                    }))
                    .catch(err => res.status(500).json({success: false, message: err, statusCode: 500}));

            } else {
                console.log(user)
                res.status(404).json({success: false, message: "user not found"})
            }
        })

}




