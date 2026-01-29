const express = require("express");
const app = express();
const main = require("./index.js");
const User = require("./models/user");
const Book = require("./models/books");


app.use(express.json());
// crus operation in the mongobd
app.get("/info", async (req, res) => {
    const result = await User.find({});
    res.send(result);
})

app.post("/info", async (req, res) => {
    const data = req.body;
    if (data) {
        await User.create(data);
        res.status(200).send("successful added to the db");
    }
    else {
        res.status(404).send("Some Error");
    }
})

// delete operation 
app.delete("/info", async (req, res) => {
    await User.deleteOne({ name: "kishan" });
    res.send("The Delete sucessful");
})

// updating the model  
app.put("/info", async (req, res) => {
    const result = await User.updateOne({ name: "kishan" }, { age: 23, city: "Banarash" });
    res.send("Updated Successfuly");
});

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