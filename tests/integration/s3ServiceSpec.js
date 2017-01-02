import s3Service from '../../src/s3Service';

describe('s3 Service Integration Tests', () => {
    it.only('listing buckets test', (done) => {
        s3Service.listS3Buckets()
            .then((result) => {
                console.log('result', result);
                expect(result).to.deep.equal(['arvindmeghraj']);
                done();
            }).then(done, done);
    });
});
