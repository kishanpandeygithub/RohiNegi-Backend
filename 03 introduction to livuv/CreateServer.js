const http = require("http");

const server = http.createServer((req , res)=>{
    if(req.url=='/'){
        res.end('Hello i am the home page');
    }
    else if(req.url=="contect"){
        res.end('Hello i am the home page');
    }
    else if(req.url=='/info'){
        res.end('Hello i am the home page');
    }
    res.end("Hello i am kishan pandey ji")
})

server.listen(3000 , ()=>{
    console.log("The server is listen in to the 3000 port");
})