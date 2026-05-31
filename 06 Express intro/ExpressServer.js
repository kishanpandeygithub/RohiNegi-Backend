const express = require("express");
const app = express();
app.get("/" ,(req , res ,next)=>{
    res.send("Hello world");
})

app.listen(3000 ,()=>{
    console.log("The app is listining in the port no 3000");
})