const express = require("express");
const Book = require("./models/book");
const main = require("./database");
const app = express();
app.use(express.json());
// [
//   { name: "Atomic Habits", author: "James Clear", price: 1300 },
//   { name: "Clean Code", author: "Robert C. Martin", price: 2600 },
//   { name: "The Lean Startup", author: "Eric Ries", price: 1500 },
//   { name: "The Alchemist", author: "Paulo Coelho", price: 1000 },
//   { name: "Thinking, Fast and Slow", author: "Daniel Kahneman", price: 1200 }
// ]

app.get("/book", async (req, res) => {
    try {
        const Books = await Book.find({});
        res.status(200).send(Books);
    } catch (err) {
        res.status(404).send("The books are not find");
    }
});
app.post("/book", async (req, res) => {
    try {
        const data = req.body;
        for (let doc of data) {
            const Books = new Book(doc);
            await Books.save();
        }
        // const Books = await Book.insertMany(data);
        // // console.log(data);
        res.status(200).send("Data updated successfull");
    } catch (err) {
        res.status(404).send("The books can not be pushed");
    }
});


app.patch("/book", async (req, res) => {
    try {
        await Book.updateMany(
            { price: { $gt: 1200 } },
            { price: 1500, cost: "High Prised" }
        )
        res.status(200).send("Data updated successfull");
    } catch (err) {
        res.status(404).send("The Data can not be updated");
    }
});
app.delete("/book", async (req, res) => {
    try {
        await Book.deleteMany(
            { price: { $gte: 1200 } }
        )
        res.status(200).send("Data deleted successfully");
    } catch (err) {
        res.status(404).send("The Data can not be deleted");
    }
});



main()
    .then(() => {
        console.log('The database connected successful');
        app.listen(5000, () => {
            console.log(`The app is listining on the port number ${5000}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })

