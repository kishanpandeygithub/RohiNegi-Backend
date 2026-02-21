const express = require("express");
const app = express();
const main = require("./index.js");
const User = require("./models/user");
const Book = require("./models/books");
const validateUser = require("./utils/validateUser.js");
const bcrypt = require("bcrypt");


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

app.post("/register", async (req, res) => {
    try {
        validateUser(req.body);

        // converting the password into hash 
        req.body.password = await bcrypt.hash(req.body.password, 10);
        await User.create(req.body);
        res.status(200).send("User resister successfully");
    }
    catch (err) {
        res.send(err.message, "User can not be resistered");
    }
})

//this is the rest api for the login to the user
app.post("/login", async (req, res) => {
    try {
        const data = req.body;
        const people = await User.findById(data._id);
        if (!people) {
            throw new Error("User not Exist");
        }
        if (!(people.emailId === data.emailId)) {
            throw new Error("Invalid Data");
        }
        //the compare function expacet the two parameter
        //  bcrypt.compare(palne password  , hashed password);
        const isAllowed = await bcrypt.compare(data.password, people.password);
        if (!isAllowed) {
            throw new Error("Invalid Data");
        }
        res.send("Successfully login");
    }
    catch (err) {
        res.status(400).send("Error occored :", err.message);
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
    .then( () => {
        console.log("Database connected Successful");
        app.listen(4000, () => {
            console.log(`the app is listening on the port number ${4000}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })