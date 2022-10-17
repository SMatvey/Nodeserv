// const http = require("http");
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer(function(req, res ) {
//     res.statusCode=200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end("hello word!");
// })

// server.listen(port, hostname, ()=> {
//     console.log ("server runing at ")
// })

const http = require("http");

const users = [
    {name:"user1", age:"16"},
    {name:"user2", age:"18"}
];

const hostname = '127.0.0.1';
const port = 9999;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/json');
    res.end(JSON.stringify(users));
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
