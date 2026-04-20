const redisClient = require("../config/redis.js");

const WINDOW_SIZE = 60 * 60; // 1 hour
const MAX_REQUESTS = 60;

const rateLimiter = async (req, res, next) => {
    try {
        const key = `rate_limit:${req.ip}`;
        const currentTime = Math.floor(Date.now() / 1000);
        const windowStart = currentTime - WINDOW_SIZE;

        // Remove old requests
        await redisClient.zRemRangeByScore(key, 0, windowStart);

        // Count requests in window
        const requestCount = await redisClient.zCard(key);

        if (requestCount >= MAX_REQUESTS) {
            res.status(429).send({
                message: "Too many requests, please try again later"
            });
        }

        // Add current request
        await redisClient.zAdd(key, [{
            score: currentTime,
            value: `${currentTime}-${Math.random()}`
        }]);

        // Set expiry
        await redisClient.expire(key, WINDOW_SIZE);

        next();
    } catch (err) {
        console.error(err);
        res.status(500).send("Redis Error: " + err.message);
    }
};

module.exports = rateLimiter;