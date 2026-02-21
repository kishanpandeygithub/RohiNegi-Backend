const bcrypt = require("bcrypt");

const password = "rajaHindustani";
async function hashing() {
    console.time("hashtime");
    // in this the bcrypt.hash function has the two paramater the first is the passowd and the
    //  secont the round 
    // which is the 10 to the power number algo of the hash will run for the finding the hash
    //this will take the alot of the time by increasing the round
    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    // const hash = await bcrypt.hash(password, salt);
    // console.log(hash);
    console.timeEnd("hashtime");
}


// $2b$10$gWaVzHFlS3MgKzrmg20tpeu8FBo0WJkBr5FXei7zfaTCtTXwNobxK
hashing();


