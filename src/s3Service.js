import AWS from 'aws-sdk';
import _ from 'lodash';

AWS.config.credentials = new AWS.SharedIniFileCredentials({
    'profile': 'default'
});


let listBuckets = () => {
    let s3 = new AWS.S3();
    return new Promise((resolve, reject) => {
        s3.listBuckets().promise()
        .then((data) => {
            if (data.Buckets.length === 0) {
                return resolve({
                    'message': 'There are no buckets',
                    'data': {}
                });
            }

            let myBuckets = [];
            _.forEach(data.Buckets, (bucket) => {
                myBuckets.push(bucket.Name);
            });
            return resolve(myBuckets);
        })
        .catch((err) => {
            return reject(err);
        });
    });
};


export default {
    listBuckets
};
