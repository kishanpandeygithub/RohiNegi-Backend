const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        city: String,
        gender: String
    }
);
// model kya hai the meaning of making the model means making the Collection or table 
// now we can create the instance of the this 
const User = mongoose.model("user", userSchema);



// // in this line we create the document in the collection 
// const user1 = new User({
//     name: "kishan",
//     age: 20,
//     city: "varanasi",
//     gender: "Male"
// });
// await user1.save();


// // in the avove statement we have to create the make the new user the we have to save it in the db
// // it can be done in the one line 
// await User.create({ name: "raja", age: 21, city: "manipur", gender: "Male" });


// // how to insert the multiple document 
// await User.insertMany([
//     { name: "mohan", age: 21, city: "somnath", gender: "Male" },
//     { name: "kalo", age: 23, city: "jaypur", gender: "Male" },
//     { name: "rasi", age: 45, city: "gujrat", gender: "female" },
// ]);

module.exports = User;