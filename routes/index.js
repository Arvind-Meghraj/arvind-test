

import express from 'express';
let router = express.Router();
import s3Service from '../src/s3Service';


router.get('/', (req, res, next) => {
    console.log('im here');
    s3Service.listBuckets()
        .then((data) => {
            return res.send(data);
        })
        .catch(next);
});

module.exports = router;
