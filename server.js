const express = require ('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const logger = require('morgan');
const cors = require('cors');


const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ 
    extended: true,
}));
app.use(cors());

app.disable('x-powered-by');

app.set('port', port);

server.listen(3000, '192.168.2.9' || 'localhost', function() {
    console.log('Aplicacion de nodeJS ' + port + ' Iniciada...');
});

app.get('/', (req, res) => {
    res.send('Ruta raiz del backend');
});

app.get('/test', (req, res) => {
    res.send('Ruta test');
});

//error handler
app.use((err, req, res, next ) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);

});

//200 RESPUESTA EXITOSA
//404 NO EXISTE LA RUTA
//500 ERROR INTERNO DEL SERVIDOR
