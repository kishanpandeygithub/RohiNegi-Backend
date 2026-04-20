const express = require("express");
const app = express();
// this is the process of the creating the new server 
const http = require('http');
const server = http.createServer(app);
// here we are requireing the socket.io fo  the upgradation of the serverb
const { Server } = require("socket.io");
// here we are upgreading the server 
const io = new Server(server);

const path = require("path");


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})
// this is the code for the coonnection for the server to me 
// the socket here represent the vlae that unicly identify the connected user 
io.on("connection", (socket) => {
    // socket.on("message", (data) => {
    //     socket.broadcast.emit('new-message', data);
    // });
    socket.on("message", ({ room, msg }) => {
        socket.to(room).emit('new-message', msg);
    });
    socket.on("join-room", (room) => {
        socket.join(room);
    })
    socket.on("disconnect", () => {
        console.log("Disconnnecteed form the server ");
    })
})
server.listen(3000, () => {
    console.log("Listining on the port number 3000");
})

// this process is not recomennded
// const server =app.listen(3000 ,()=>{
//     console.log("listining to the port number 3000");
// })

// // we know that the norml server will create and we haveto upgrade the sever to the web socket
// // in this code the server is upgreaded to the web socket
// const io = new Server(server);