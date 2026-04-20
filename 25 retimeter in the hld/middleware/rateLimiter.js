const redisClint = require("../config/redis.js");

const rateLimiter = async (req, res, next) => {
    try {
        const ip = req.ip;
        // console.log(ip);
        // this icnrement function increase the key of the ip and if the ip is not present thet it make it 1 
        const count_of_request = await redisClint.incr(ip);
        if (count_of_request == 1) {
            await redisClint.expire(3600);
        }
        if (count_of_request > 50) {
            throw new Error("To many request");
        }
        console.log(count_of_request);
        next();
    }
    catch (err) {
        res.send("Error: " + err.message);
    }
}
module.exports = rateLimiter;