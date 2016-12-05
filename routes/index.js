require('babel-core/register');
var express = require('express');
var router = express.Router();
var s3Service = require('../src/s3Service').default;



router.get('/', (req, res, next) => {
    try {
    s3Service.listBuckets();
    } catch (error) {
        console.log('error', error);
    }
    res.send('i respond to requests');
});

module.exports = router;
