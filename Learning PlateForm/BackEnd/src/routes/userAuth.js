const express = require("express");

const userMiddleware = require("../middleware/userMiddleware.js")
const adminMiddleware = require("../middleware/adminMiddleware.js")

const authRouter = express.Router();

const {login ,register ,logout ,adminRegister} = require("../controllers/userAuthent.js");
//register
authRouter.post("/register" , register);
//login
authRouter.post("/login",login );
//logout
authRouter.post("/logout" , userMiddleware ,logout);
//getprofile


// authRouter.get("/getProfile" , getProfile);

//this is the routing for the admine
authRouter.post("/admin/register" , adminMiddleware  , adminRegister )

module.exports = authRouter;