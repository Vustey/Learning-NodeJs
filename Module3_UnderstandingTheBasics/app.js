const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    // process.exit();
});

server.listen(3000);

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req);
//     res.end('Hello World'); // Add a response to avoid hanging connections
// });

// server.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });
