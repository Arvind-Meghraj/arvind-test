

import express from 'express';
let router = express.Router();
import s3Service from '../src/s3Service';


router.get('/', (req, res, next) => {
    try {
        s3Service.listBuckets();
    } catch (error) {
        console.log('error', error);
    }
    res.send('i respond to requests');
    next();
});

module.exports = router;
