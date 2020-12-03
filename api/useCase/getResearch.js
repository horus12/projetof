'use strict';


const isEmptyObject = require("mongoose/lib/utils");

const mongoose = require("mongoose")
const User = mongoose.model("user");
const Research = mongoose.model("research");
exports.getResearch = (req, res) => {
    User.findOne({cpf: req.query.userId}).then((user) => {
        if (!user) {
            res.status(404).json({success: false, message: "user not found", statusCode: 404});
        }

        Research.find({userId: req.query.userId}).then((research) => {
            if (research && !isEmptyObject.isEmptyObject(research))
                res.status(200).json({success: true, body: research, statusCode: 200});
            else
                res.status(404).json({
                    success: false,
                    message: "not found researchs",
                    statusCode: 404,
                });
        });
    });
};


exports.getResearchById = async (req, res) => {
    Research.findById(req.params.researchId)
        .then(research => {
            if (research) {
                res.status(200).json({success: true, body: research, statusCode: 200})
            } else
                res.status(404).json({success: false, message: "not found this research", statusCode: 404})
        })

}