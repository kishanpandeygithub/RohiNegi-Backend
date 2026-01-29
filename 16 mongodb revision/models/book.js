const mongoose = require("mongoose");

const Bookschema = new mongoose.Schema(
    {
        name: String,
        author: String,
        price: Number,
    }
)

const Book = mongoose.model("book", Bookschema);

module.exports = Book;