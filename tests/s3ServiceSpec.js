import mocha from 'mocha';
import chai from 'chai';
import s3Service from '../src/s3Service';

let expect = chai.expect;

describe('s3 Service Integration Tests', () => {
    it('listing buckets test', function(done) {
        this.timeout(5000);
        s3Service.listBuckets()
        .then((result) => {
            expect(result).to.deep.equal(['arvindmeghraj']);
        }).then(done, done);
    });
});
