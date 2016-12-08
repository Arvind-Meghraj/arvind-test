let thisFunctionReturnsAPromise = (input) => {
    return new Promise((resolve, reject) => {
        switch (input) {

        case 'success':
            return resolve('it is a success');

        case 'fail':
            return resolve('it failed');

        case 'reject':
            return reject('reject');

        default:
            return resolve('this is the default');
        }
    });
};
export default {
    thisFunctionReturnsAPromise
};
