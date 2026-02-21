const express = require("express");
const app = express();
const main = require("./index.js");
const User = require("./models/user");
const Book = require("./models/books");


app.use(express.json());

app.get("/user", async (req, res) => {
    try {
        const data = await User.find({});
        res.send(data);
    }
    catch (err) {
        res.send(err.message);
    }
})

app.post("/user", async (req, res) => {
    try {
        const mandatoryField = ["FirstName", "age", "emailId", "password"];
        const data = Object.keys(req.body);
        const IsAllowed = mandatoryField.every((key) => { data.includes(key) });
        if (!IsAllowed) { throw new Error("Field Missing") };
        await User.create(req.body);
        res.status(200).send("User resister successfully");
    }
    catch (err) {
        res.send(err.message, "User can not be resistered");
    }
})


// to get the particulat user  
app.get("/user/:id", async (req, res) => {
    try {
        let id = req.params.id;
        const data = await User.findById(id);
        res.send(data);
    }
    catch (err) {
        res.send("err Occored", err.message);
    }
})
app.delete("/user/:id", async (req, res) => {
    try {
        let id = req.params.id;
        await User.findByIdAndDelete(id);
        res.send("The data is deleted successful");
    }
    catch (err) {
        res.send("err Occored : Can not Deleted", err.message);
    }
})
app.patch("/user", async (req, res) => {
    try {
        let { _id, ...updated } = req.body;
        await User.findByIdAndUpdate(_id, updated, { "runValidators": true });
        res.send("The data is updated successfuly");
    }
    catch (err) {
        res.send("err Occored : Can not updated", err.message);
    }
})
main()
    .then(async () => {
        console.log("Database connected Successful");
        app.listen(4000, () => {
            console.log(`the app is listening on the port number ${4000}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })