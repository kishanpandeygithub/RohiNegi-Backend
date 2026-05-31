// this is the book rivison that teach you the all the request in the express
const express = require("express");
const app = express();

const bookStore = [
    {
        id: 1,
        name: "Harry Potter",
        aurhor: "Kishan pandey"
    },
    {
        id: 2,
        name: "Friends",
        aurhor: "Marks Hallen"
    },
    {
        id: 3,
        name: "The RollerCoster",
        aurhor: "Mark andrios"
    },
    {
        id: 4,
        name: "DSA",
        aurhor: "Jack"
    },
    {
        id: 5,
        name: "System Design",
        aurhor: "Karl marks"
    }
]

app.use(express.json());

app.get("/book" ,(req , res ,next)=>{
    console.log("hello");
    res.send(bookStore);
})
app.get("/book/:id" ,(req , res ,next)=>{
    const id = req.params.id;
    const book =bookStore.find((book)=>{
        return book.id==id;
    })
    res.send(book);
})
app.post("/book" , (req , res)=>{
    const data = req.body;
    console.log(data);
    res.status(200).send("responce recived Successfully");
})
app.listen(3000 , (req , res)=>{
    console.log("the app is listen to the port no 3000");
})
