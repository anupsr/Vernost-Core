const express = require('express');
const abc= express();
const http = require('http');

const bodyparser = require('body-parser');
var app = require('./app');

abc.use(bodyparser.json());
abc.use(bodyparser.urlencoded({extended :false}));

abc.use('/',app);

const port = process.env.PORT || 3000;
const server = http.createServer(abc);
// app.set('port',port);
server.listen(port,()=>{
    console.log("server listening on port:"+port);
})