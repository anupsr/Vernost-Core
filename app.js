const express = require('express');
const router = express.Router();
const connect = require('./db');
// var xml =require('xml');
// var jsonxml = require('jsontoxml');



router.post('/search', (req, res) => {
    connect.getConnection((err, conn) => {
        if (err) { console.log(err); }
        else {
            var sql = "CALL sp_test ('" + req.body.groupname + "','" + req.body.fromdate + "','" + req.body.todate + "')";
            conn.query(sql, (err, result) => {
                if (err) {
                    res.send(err);
                } else {
                    // console.log(JSON.stringify(result));
                    res.send(result);
                }

            })
        }

    })
});

router.post('/login', (req, res) => {
    if (checkUndefined(req.body.username == "" && checkUndefined(req.body.password == ""))) {
        res.send(
            {
                "status": "false",
                "message": "Invalid credentials"
            }
        )
    }
    else {
        connect.getConnection((err, conn) => {
            if (err)
                console.log(err);
            else {
                var query = "SELECT vc_user.EMAIL, vc_user.USER_ID, vc_system_user.PASSWORD, vc_system_user.USER_ALIAS FROM vc_system_user LEFT JOIN vc_user  ON vc_system_user.USER_ID = vc_user.USER_ID WHERE vc_user.EMAIL='"+req.body.username+"' AND vc_system_user.PASSWORD='"+req.body.password+"'";
                conn.query(query,(err,result)=>{
                    // console.log('reslut',result[0].USER_ALIAS);
                    if(err){
                        res.send({
                            "status": "false",
                            "message": "Error Invalid Credential",
                            "Info": err
                        })
                    }
                    else{
                        if (result.length == 0) {
                            res.send({
                                "status": false,
                                "message": "Invalid Credential"
                            })
                        }
                        else {
                         var datainfo={
                           "status":true,
                            aliasname:result[0].USER_ALIAS,
                            id:result[0].USER_ID
    
                         }
                         res.json(datainfo);
                        }
                    }
                })
            }
        })
    }
    function checkUndefined(data) {
        if (data == undefined) { return "" }
        else
            return data;
    }
});




module.exports = router;