node js is the run time environment in which a v8 engine is given to understand the js code for the running 
js code ---> v8 engine -->machin code 
Node.js is a runtime environment that executes JavaScript using the V8 JavaScript engine and provides non-blocking, event-driven I/O for building scalable network applications.
7️⃣ How Node.js Creates a Server?

Node.js uses the http module.

Example:
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(3000);

8️⃣ Internal Working of Server Creation
Step-by-Step:

http.createServer():

Creates an event listener
    server.listen(3000):

Asks OS to open TCP socket OS starts listening on port 3000

Client sends request
Request enters Event Queue
Event Loop picks request
Callback function executes
Response is sent back
