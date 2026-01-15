const http = require("http");

const server = http.createServer((req , res)=>{
    res.end("Hello i am kishan pandey");
});
server.listen("3000" ,()=>{
    console.log("The server is the listning on the 300 port");
})



