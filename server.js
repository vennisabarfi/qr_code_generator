const express = require('express');
const router = express.Router();
const axios = require('axios');
var PNG = require('png-js');


router.get('/qrcode/:text', async function(req,res,next){
    const req_text = req.params.text; // receive text from user
    const text = encodeURIComponent(req_text);
    const size = "200x200"; // will develop functionality later 
    const qr_url = 'http://api.qrserver.com/v1/create-qr-code/?data=[URL-encoded-text]&size=[pixels]x[pixels]';

    try{
        const response = await axios.get(qr_url);
            res.send(response.data);
            console.log(response);
        
    }catch(error){
        console.log(`Error: ${error}`);
        response.json({message: error});
    }
        


    })

router.get('/qrcode:text', function(req,res,next){
    req_text
    next();
})





module.exports = router;