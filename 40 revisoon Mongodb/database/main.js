const {MongoClient} = require("mongodb");

const clint = new MongoClient(process.env.URL);

const dbname = "CompleateRevision";

async function main(params) {
    try {
        clint.connect();
        console.log("connection Successful");
        const db = clint.db(dbname);
        const collection = db.collection('data')
        // crud operation done ihere 

    } catch (error) {
        console.error("Connection Error" , error);
    }
    return "done";
}
