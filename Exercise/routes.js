const fs = require('fs');

const requestHandler = (req,res) =>{
    const url = req.url;
    const method = req.method;

    if (url ==='/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type ="text" name="User"><button type = "submit">Sent</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method ==='POST'){
        const body =[];
        req.on('data',(chunk) =>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err =>{
               res.statusCode = 302;
               res.setHeader('Location','/');
               res.end(); 
            });
        });
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title> My First Page</title></head>');
    res.write('<body><ul><li>User 1</li></ul></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;