const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const qrcode = require('./server'); //import qr code generator

router.get('/qrcode_email/:email', function(req,res,next){
    const userEmail = req.params.email;
    const transporter = nodemailer.transport({
        host: "smtp.google.com", //generalize this
        port: 587,
        secure: false,
        auth:{
          user: "vennisabarfi@gmail.com", //can generalize to my email for now
          //pass: "abcd", //generalize or request
        }
      
    });
     // Verify transporter
     transporter.verify(function(error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to send messages');
            sendMail(); // Call sendMail function once transporter is verified
        }
    });

 

    async function sendMail(){
        const info = await transporter.sendMail({
            from: '"QR Code Generator", vennisabarfi@gmail.com', //sender address
            to: `My Email, ${userEmail} `, //list of receivers
            subject: "Here's your QR Code" , // Subject Line
            text: "View and Download your QR Code Here",
            // html: "<img> qrcode <img/>", //img body
            attachments:[{
                filename: 'qrcode.png',
                path: pass, //path
            }]
        });
        console.log("Message sent: %s", info.messageId);
        res.json({message: `Email has been sent successfully to ${userEmail}`})
    }
    
    
})


module.exports = router();
