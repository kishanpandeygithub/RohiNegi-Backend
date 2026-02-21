require("dotenv").config();
const express = require("express");
const app = express();
const main = require("./index.js");
const cookieParser = require("cookie-parser");
const auth = require("./routes/auth.js");
const userData = require("./routes/userdata.js");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


app.use("/auth" ,auth );
app.use("/" ,userData );

main()
    .then(() => {
        console.log("Database connected Successful");
        app.listen(process.env.PORT, () => {
            console.log(`the app is listening on the port number ${4000}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })