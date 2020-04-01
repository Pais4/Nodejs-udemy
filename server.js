// Http modulo nativo de NodeJs
const http = require('http');

// Creamos el servidor
const server = http.createServer();

// Req -> Lo que llega del Request
// Res -> Lo que le vamos a responder al cliente
server.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end('hello world\n');
});

server.listen(8001);
console.log('Servidor en la Url http://localhost:8001');