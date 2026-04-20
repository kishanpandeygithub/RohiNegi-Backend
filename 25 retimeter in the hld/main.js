require("dotenv").config();
const express = require("express");
const app = express();
const main = require("./index.js");
const cookieParser = require("cookie-parser");
const auth = require("./routes/auth.js");
const userData = require("./routes/userdata.js");
const redisClint = require("./config/redis.js");
const rateLimiter = require("./middleware/rateLimiter.js");


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

//to implewmnting the retlimeter we use the middleware
app.use(rateLimiter);

app.use("/auth", auth);
app.use("/", userData);

const InutilizeConnection = async () => {
    try {
        // await redisClint.connect();
        // console.log("Connected to the redis");
        // await main();
        // console.log("connected to the mongodb");
        await Promise.all([redisClint.connect(), main()]);
        console.log("Db connected");
        app.listen(process.env.PORT, () => {
            console.log(`the app is listening on the port number ${4000}`);
        })
    }
    catch (err) {
        console.log("Error" + err);
    }
}

InutilizeConnection();
