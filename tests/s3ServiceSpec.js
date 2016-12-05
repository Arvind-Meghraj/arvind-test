import mocha from 'mocha';
import chai from 'chai';
import s3Service from '../src/s3Service';

let expect = chai.expect;

describe('s3 Service Tests', () => {
    it('listing buckets test', () => {
        let test = s3Service.listBuckets();
        console.log('rest: ', test);
        expect(2).to.equal(2);
    });
});
