const express = require("express");
const app = express();
//we can not send the two responce at one time until the clint is requested for that

// what is the middleware 
// the middleware the middle code which are exicuted befre the final responces 
// mw-> mw-> mw ->responce 
// app.use("/user", (req, res, next) => {
//     console.log("first");
//     // res.send("Hello ji I am the first");
//     next();
//     console.log("Next to the first");
// });
// app.use((req, res, next) => {
//     console.log("second");
//     res.send("Helli ji i am second");
//     next();
//     console.log("Next to the second");
// });
app.use("/user", (req, res, next) => {
    console.log(`${Date.now()} ${req.method} ${req.url}`);
    // res.send("I am about the user");
    next();
})
app.use("/user", (req, res, next) => {
    console.log(`${Date.now()} ${req.method} ${req.url}`);
    // res.send("Info saved");
    next();
})
app.get("/user", (req, res) => {
    res.send("The get request successful");
})
app.post("/user", (req, res) => {
    res.send("The post request successful");
})
app.listen("3000", () => {
    console.log("The app is listning on the port number 3000");
});