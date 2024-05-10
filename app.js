const express = require('express');
const app = express();
const port = 3000;  
const server = require("./server");




// main homepage
app.get('/', function(req,res){
    res.json({message: `Welcome to the QR Code Generator API!`});
})

// Server to render qr code
app.use(server);

// Listen to server
app.listen(port, function(req,res){
    console.log(`Server is listening on port ${port}`);
})
