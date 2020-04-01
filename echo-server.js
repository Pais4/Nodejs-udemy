const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    

    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('hello world\n');
});

server.listen(8001);
console.log('Servidor en la Url http://localhost:8001');