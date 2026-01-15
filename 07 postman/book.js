const express = require("express");
const app = express();

app.use(express.json());
// this is the information of the book store 
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


app.get("/book", (req, res) => {
    const filter = bookStore.filter((data) => {
        return data.aurhor == req.query.aurhor;
    })
    res.send(filter);
});

app.get("/book/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const Book = bookStore.find(info => info.id == id);
    res.send(Book);
});

app.post("/book", (req, res) => {
    const data = req.body;
    bookStore.push(data);
    res.send("The book saved successfully");
});

app.patch("/book", (req, res) => {
    const id = req.body.id;
    const data = bookStore.find((info) => {
        return info.id == id;
    })
    if (req.body.aurhor)
        data.aurhor = req.body.aurhor;
    if (req.body.name)
        data.name = req.body.name;
    res.send("The patch request is successful");
});

app.put("/book", (req, res) => {
    const id = req.body.id;
    const data = bookStore.find((info) => {
        return info.id == id;
    })
    if (req.body.aurhor)
        data.aurhor = req.body.aurhor;
    if (req.body.name)
        data.name = req.body.name;
    res.send("The put request is successful");
});

app.delete("/book/:id", (req, res) => {
    let index = bookStore.findIndex((data) => {
        return data.id == parseInt(req.params.id);
    });
    bookStore.splice(index, 1);
    res.send("The Delet is successful");
})
app.listen("3000", () => {
    console.log(`The Server is the listining on the port ${3000}`);
})