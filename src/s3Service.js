import AWS from 'aws-sdk';
import _ from 'lodash';

AWS.config.credentials = new AWS.SharedIniFileCredentials({
    'profile': 'default'
});


function listBuckets() {
    let s3 = new AWS.S3();
    console.log('s3', s3.listBuckets);
    console.log('im here');
    s3.listBuckets((err, data) => {
        console.log('im here now');
        if (err) {
            console.log(`error:  ${err}`);
            throw new Error(`there was an error listing the buckets. Error: ${JSON.stringify(err)}`);
        }

        if (data.Buckets.length === 0) {
            console.log('There are no buckets');
            return {
                'message': 'There are no buckets',
                'data': {}
            };
        }

        let myBuckets = [];
        _.forEach(data.Buckets, (bucket) => {
            myBuckets.push(bucket.Name);
        });

        console.log('in service buckets: ', myBuckets);
        return myBuckets;
    });
}

export default {
    listBuckets
};
