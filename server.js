
import express  from 'express';
import routes from './routes/index';


let createServer = () => {
    let server = express();
    server.set('port', process.env.PORT || 3000);
    server.use(routes);
    return server.listen(`${ server.get('port') }`, () => {
        console.log(`Started server on port ${ server.get('port') }`);
    })
    .on('error', (err) => {
        if (err.errno === 'EADDRINUSE') {
            console.error('port ' + server.get('port') + ' already in use');
        } else {
            throw err;
        }
    });
};

let stopServer = () => {
    return '';
};

module.exports = createServer;
//module.exports = stopServer;
