// the http method is the internally defind in the system 
const http = require("http");

// this is used to create the server 
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("hello world");
    }
    else if (req.url === "/contect") {
        res.end("This is out contact page");
    }
    else if (req.url === "/about") {
        res.end("This is out about page");
    }
    else {
        res.end("This is not valid url");
    }

})

// this is listing the port on the port number 
server.listen("3000", (req, res) => {
    console.log("The server is the listinig on the port number 3000");
})

// aws ,  hiroku , vercel provide the fearure for the server hardware 