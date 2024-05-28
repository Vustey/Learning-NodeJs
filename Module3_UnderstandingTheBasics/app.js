// const http = require('http');

// const server = http.createServer((req,res)=>{
//     console.log(req.url, req.method, req.headers);
//     // process.exit();
//     res.setHeader('content-type','text/html');
//     res.write('<html>');
//     res.write('<head><title> My First Page</title></head>');
//     res.write('<body><h1>Hello Tran Thanh Vu</h1></body>');
//     res.write('</html>');
//     res.end();
    

// });

// server.listen(3000);

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req);
//     res.end('Hello World'); // Add a response to avoid hanging connections
// });

// server.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });

const http = require('http');

const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);