import testService from '../../src/testService';

let expect = chai.expect;
describe('Test Service Promise result tests', () => {
    it('it returns a "success" promise result test', (done) => {
        let result = testService.thisFunctionReturnsAPromise('success');
        result.then((resolved) => {
            expect(resolved).to.equal('it is a success');
            done();
        });
    });

    it('it returns a "failed" promise result test', (done) => {
        let result = testService.thisFunctionReturnsAPromise('fail');
        result.then((resolved) => {
            expect(resolved).to.equal('it failed');
            done();
        });
    });

    it('it returns a "default" promise result test', (done) => {
        let result = testService.thisFunctionReturnsAPromise('some unknown argument');
        result.then((resolved) => {
            expect(resolved).to.equal('this is the default');
            done();
        });
    });

    it('it returns a "rejected" promise test', (done) => {
        let result = testService.thisFunctionReturnsAPromise('reject');
        result
        .catch((err) => {
            expect(err).to.equal('reject');
            done();
        });
    });
});
