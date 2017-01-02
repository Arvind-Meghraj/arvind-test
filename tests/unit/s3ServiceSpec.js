let proxyquire = require('proxyquire').noCallThru().noPreserveCache();

describe('s3 service unit tests', () => {
    let s3Service;
    before('Before Each Test', () => {

    });

    afterEach('after Each Test', () => {
    });

    it('Should return no buckets as the response from the api call', (done) => {
        let expectedData = {
            'message': 'There are no buckets',
            'data': {}
        };
        s3Service = proxyquire('../../src/s3Service', {
            'aws-sdk': {
                'S3': () => {
                    return {'listBuckets': (err, data) => {
                        return Promise.resolve(expectedData);
                    }};
                }
            }
        }).default;
        s3Service.listS3Buckets()
        .then((result) => {
            expect(result).to.deep.equal(expectedData);
        }).then(done, done);
    });

    it('Should list the buckets', (done) => {
        let expectedData = { 'Buckets': ['arvind-test-bucket'] };
        s3Service = proxyquire('../../src/s3Service', {
            'aws-sdk': {
                'S3': () => {
                    return {'listBuckets': (err, data) => {
                        return Promise.resolve(expectedData);
                    }};
                }
            }
        }).default;
        s3Service.listS3Buckets()
        .then((result) => {
            expect(result).to.deep.equal(expectedData);
        }).then(done, done);
    });
});
