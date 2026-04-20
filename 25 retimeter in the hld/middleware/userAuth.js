const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const User = require("../models/user");
const redisClint = require("../config/redis.js")
const userAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            throw new Error("Token dose not Exist");
        }
        // const payload = jwt.verify(req.cookies.token, "kishan@123");
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        // console.log(payload);
        const { _id } = payload;
        if (!_id) {
            throw new Error("Is is missing");
        }
        const data = await User.findById(_id);
        if (!data) { throw new Error("User dose not exist") };

        const isBlocked =await redisClint.exists(`token:${token}`);
        if(isBlocked){
            throw new Error("Login Again - Invalid Token");
        }
        req.result = data;
        next();
    }
    catch (err) {
        res.send(err.message);
    }
}
module.exports = userAuth;