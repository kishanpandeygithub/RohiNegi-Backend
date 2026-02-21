const mongoose = require("mongoose");
const url = "";

async function main() {
    await mongoose.connect(url);
}

module.exports = main;
