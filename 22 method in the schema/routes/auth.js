const validateUser = require("../utils/validateUser");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
app.use(express.json());

const authRouter = express.Router();
app.use(cookieParser());

authRouter.post("/register", async (req, res) => {
    try {
        validateUser(req.body);

        // converting the password into hash 
        req.body.password = await bcrypt.hash(req.body.password, 10);
        await User.create(req.body);
        res.status(200).send("User resister successfully");
    }
    catch (err) {
        res.status(400).send(err.message);

    }
})

//this is the rest api for the login to the user
authRouter.post("/login", async (req, res) => {
    try {
        const data = req.body;
        const people = await User.findOne({ emailId: data.emailId });
        if (!people) {
            throw new Error("User not Exist");
        }
        if (!(people.emailId === data.emailId)) {
            throw new Error("Invalid Data");
        }
        //the compare function expacet the two parameter
        //  bcrypt.compare(palne password  , hashed password);
        const isAllowed = await people.validUser(data.password);
        if (!isAllowed) {
            throw new Error("Invalid Data");
        }
        //here we send the jwt token to the user
        // how we can add the expairy date to the jwt token 
        const token = people.getJWT();
        res.cookie("token", token);
        res.send("Successfully login");
    }
    catch (err) {
        res.status(400).send(err.message);
    }
})
authRouter.post("/logout", async (req, res) => {
    try {
        res.cookie("token", null , {expires: new Date(Date.now())});
        res.status(200).send("Logout successfully");
    }
    catch (err) {
        res.status(400).send(err.message);
    }
})
module.exports = authRouter;