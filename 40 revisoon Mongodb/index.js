require('dotenv').config();
const express = require("express");
const Book = require("./models/Book.js");
const main = require("./connect.js");
const app = express();
app.use(express.json());

app.get("/book" ,async (req , res)=>{
    try{
        const books = await Book.find({});
        res.send(books);
    }catch(err){
        res.send(err);
    }
})
app.post("/book" ,async (req  , res)=>{
    try{
       console.log(req.body);
       await Book.create(req.body);
       res.send("data Stored Successfully")
    }
    catch(err){
        res.status(401).error("Data canNot Stored Successfully" ,err);
    }
})

main()
    .then(async () => {
        console.log("Database connected successfully");
        app.listen(process.env.PORT, () => {
            console.log("port is listing on the port no 3000")
        })
    })
    .catch((error)=>{
        console.error("data Base connection Error" , error);
    })


