const express = require("express");
const app = express();
app.use(express.json());
const userdata = express.Router();
const userAuth = require("../middleware/userAuth");
const User = require("../models/user");
// to get the particulat user  
userdata.get("/user", userAuth, async (req, res) => {
    try {

        res.send(req.result);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})
userdata.delete("/user/:id", userAuth, async (req, res) => {
    try {
        let id = req.params.id;
        await User.findByIdAndDelete(id);
        res.send("The data is deleted successful");
    }
    catch (err) {
        res.status(400).send(err.message);
    }
})
userdata.patch("/user", userAuth, async (req, res) => {
    try {
        let { _id, ...updated } = req.body;
        await User.findByIdAndUpdate(_id, updated, { "runValidators": true });
        res.send("The data is updated successfuly");
    }
    catch (err) {
        res.status(400).send(err.message);
    }
})
module.exports = userdata;