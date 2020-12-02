'use strict';

let nodemailer = require('nodemailer');
let smtpTransport = require('nodemailer-smtp-transport');
let handlebars = require('handlebars');
let fs = require('fs');

function sendEmail(users,title) {


    let readHTMLFile = function (path, callback) {
        fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
            if (err) {
                throw err;
                callback(err);
            } else {
                callback(null, html);
            }
        });
    };

    readHTMLFile(__dirname + '/../repository/htmlmodel.html', function (err, html) {
        let template = handlebars.compile(html);
        let replacements = {
            username: "John Doe"
        };
        let htmlToSend = template(replacements);

        let mailOptions = {
            from: 'gabriel.lopa00@gmail.com',
            to: users,
            subject: title,
            html: htmlToSend
        };
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'gabriel.lopa00@gmail.com',
                pass: '32450795'
            }
        });


        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    });


}

module.exports = {sendEmail: sendEmail}