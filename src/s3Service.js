import AWS from 'aws-sdk';
import _ from 'lodash';

// AWS.config.credentials = new AWS.SharedIniFileCredentials({
//     'profile': 'default'
// });


let listS3Buckets = () => {
    let s3 = new AWS.S3();
    console.log(`s3: ${JSON.stringify(s3)}`);
    return s3.listBuckets((err, data) => {
        console.log(`err: ${ err }, data: ${data}`);
        if (err) {
            console.log(`er: ${err}`);
            return Promise.reject(err);
        }
        if (data.Buckets.length === 0) {
            console.log('im tested');
            return Promise.resolve({
                'message': 'There are no buckets',
                'data': {}
            });
        }
        console.log('i can get to this point');
        let myBuckets = [];
        _.forEach(data.Buckets, (bucket) => {
            myBuckets.push(bucket.Name);
        });
        console.log('im not stubbed, but real');
        return Promise.resolve(myBuckets);
    });
};


export default { listS3Buckets };
