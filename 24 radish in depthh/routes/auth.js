const validateUser = require("../utils/validateUser");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const cookieParser = require("cookie-parser");
const express = require("express");
const jwt = require("jsonwebtoken");
const redisClint = require("../config/redis.js");
const userAuth = require("../middleware/userAuth.js");

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
// the logout feature 
// redis ke database me mughe block token ko dalna hai  
// redis store the data in the ke value pair but the key should be unique 

authRouter.post("/logout", userAuth, async (req, res) => {
    try {
        const { token } = req.cookies;
        console.log(token);
        const payload = await jwt.decode(token);
        // this line is used to set the key value pair in the  token
        await redisClint.set(`token:${token}`, "Blocked");
        //this line is used to set the expire of the token so that it automaticly deleted
        await redisClint.expire(`token:${token}`, payload.exp);
        // res.cookie("token", null , {expires: new Date(Date.now())});
        res.status(200).send("Logout successfully");
    }
    catch (err) {
        res.status(400).send(err.message);
    }
})
module.exports = authRouter;