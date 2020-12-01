'use strict';


const isEmptyObject= require( "mongoose/lib/utils");

const mongoose = require('mongoose'), User = mongoose.model('user');
const Research = mongoose.model('research')
exports.getResearch = async (req, res) => {

    const user = await User.findOne({'cpf': req.body.userId})
    if (!user) {
        res.status(404).json({success: false, message: "user not found", statusCode: 404})
    }

    const research = await Research.find({'userId': req.body.userId})
    if (research && !await isEmptyObject.isEmptyObject(research))
        res.status(200).json({success: true, body: research, statusCode: 200})
    else
        res.status(404).json({success: false, message: "not found", statusCode: 404})


}