const redis  = require("redis");

const radisClint = redis.createClient({
    username: 'default',
    password: 'mJgj7narze2VCdtnRig9KfU6UjtsvwNC',
    socket: {
        host: 'redis-13535.crce206.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 13535
    }
});
// const connectRadis = async ()=>{
//     await radisClint.connect();
//     console.log("connected to the radis");
// }
// connectRadis();
module.exports = radisClint;


