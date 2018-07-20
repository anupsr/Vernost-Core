const express = require('express');
const router = express.Router();
const connect = require('./db');
// var xml =require('xml');
// var jsonxml = require('jsontoxml');



router.post('/search', (req, res) => {
    connect.getConnection((err, conn) => {
        if (err) { console.log(err); }
        else {
            var sql = "CALL sp_test ('" +req.body.groupname+ "','" + req.body.fromdate + "','" + req.body.todate + "')";
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
module.exports = router;