const express = require("express");

const app = express();

// ?  char become the optional
//+ char can be repeated multiple times
//* any numver is the charcter can be used 


// how to pass the variable in the passings 



app.use('/about/:id', (req, res, next) => {
    console.log(req.params);
    res.send("this is the about page");
})

// app.use("/home", (req, res, next) => {
//     res.send("This is the home page");
// })

// app.use("/contect", (req, res, next) => {
//     res.send("this is the contect page");
// })

// app.use("/", (req, res, next) => {
//     res.send({ name: "kishan" });
// })
app.listen("3000", (req, res) => {
    console.log("The app is the listing on the port 30000");
})