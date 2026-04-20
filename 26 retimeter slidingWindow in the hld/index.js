const mongoose = require("mongoose");
async function main() {
    await mongoose.connect(process.env.DB_CONNECT_KEY);
}

// what is the schema : the schema is the structue of the databas 

module.exports = main;