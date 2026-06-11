const express = require("express");
const submitRouter = express.Router();
const userMiddleware = require("../middleware/userMiddleware.js");
const {submitCode ,runCode} = require("../controllers/userSubmission.js")
submitRouter.post("/submit/:id" ,userMiddleware , submitCode);
submitRouter.post("/run/:id" ,userMiddleware , runCode);

module.exports = submitRouter;