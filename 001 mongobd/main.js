const express = require("express");
const app = express();
const main = require("./index.js")
const snake = require("./model/user.js");
app.use(express.json());

app.get("/snake", async (req, res) => {
    let data = await snake.find({});
    res.send(data);
})
app.post("/snake", async (req, res) => {
    let data = req.body;
    for (let obj of data) {
        await snake.insertOne(obj);
    }
    res.send("data stored successfully");
})
main().
    then(() => {
        console.log("Databse connected successfully");
        app.listen(3000, (req, res) => {
            console.log("app is the listing on the port number");
        })
    })
    .catch((err) => {
        console.log("The error occored ", +err);
    })