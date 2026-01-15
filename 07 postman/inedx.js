const express = require("express");
const app = express();

//parsing the data 
// this is the use to parse the data in to the js object to the json data 
app.use(express.json());


// app.use("/user", (req, res) => {
//     res.send({
//         "name": "Kishan",
//         "age": "23"
//     });
// })
app.get("/user", (req, res) => {
    res.send({
        "name": "Kishan",
        "age": "23"
    });
})
app.post("/user", (req, res) => {
    console.log(req.body[0].age);
    res.send("Data saved successfully");
})
app.listen("3000", () => {
    console.log("The server is the listing on the port number 3000");
})