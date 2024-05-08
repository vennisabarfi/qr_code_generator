const express = require('express');
const router = express.Router();
const axios = require('axios');
var PNG = require('png-js');
// const http = require('http');


router.get('/qrcode/:text', async function(req,res,next){
    const req_text = req.params.text; // receive text from user
    const text = encodeURIComponent(req_text);
    const size1 = parseInt('200'); // will develop functionality later 
    const size2 = parseInt('200');
    const qr_url = `http://api.qrserver.com/v1/create-qr-code/?data=${text}&size=${size1}x${size2}`;

    try{
        const response = await axios.get(qr_url,{
            // res.setHeader('Content-type', 'image/png')
            headers:{
                'Accept': 'image/png'
            },
            responseType: 'arraybuffer'
            });
            res.setHeader('Content-Type', 'image/png')
            res.send(response.data);
            console.log(response);
        
    }catch(error){
        console.log(`Error: ${error}`);
        res.status(500).json({message: `Error message: ${error}`});
    }
        


    })




module.exports = router;