const mongoose  =require("mongoose");

const bookSchema =new mongoose.Schema(
    {
        id:{
            required:true ,
            type:Number 
        } ,
        name:{
            type:String ,
            required:true ,
            trim:true ,
            minLength:3 ,
            maxLength:20
        } , 
        author:{
            type:String ,
            required:true ,
            trim:true ,
            minLength:3 ,
            maxLength:20
        } , 
        pages:{
            type:Number ,
            required:true
        } ,
        price:{
            required:true ,
            type:Number
        }
    }, { timestamps: true }
);

const Book = mongoose.model("book" , bookSchema);

module.exports = Book;
// const books = [
//   {
//     id: 1,
//     name: "The Alchemist",
//     author: "Paulo Coelho",
//     pages: 208,
//     price: 399,
//   },
//   {
//     id: 2,
//     name: "Atomic Habits",
//     author: "James Clear",
//     pages: 320,
//     price: 550,
//   },
//   {
//     id: 3,
//     name: "Clean Code",
//     author: "Robert C. Martin",
//     pages: 464,
//     price: 799
//   },
//   {
//     id: 4,
//     name: "Rich Dad Poor Dad",
//     author: "Robert Kiyosaki",
//     pages: 336,
//     price: 450,
//   },
//   {
//     id: 5,
//     name: "Think and Grow Rich",
//     author: "Napoleon Hill",
//     pages: 238,
//     price: 299,
//   }
// ];