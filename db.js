const mysql = require('mysql');

var conn = mysql.createPool({

    host:'localhost',
    user:'root',
    password:'root',
    database:'vernost_core' 
});

module.exports=conn;