const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
    {
        Book_Name: String,
        Author: String,
        prise: Number
    }
);
const Book = mongoose.model("book", bookSchema);


// await Book.create({ Book_Name: "Harry Potter", Author: "kishan", prise: 2100 });
module.exports = Book;