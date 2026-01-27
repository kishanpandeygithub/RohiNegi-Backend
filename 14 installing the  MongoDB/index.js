const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
// const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'KishanPandey';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('user');

    // the following code examples can be pasted here...
    // const insertResult = await collection.insertOne({ name: "raja", age: 40 });
    // console.log('Inserted documents =>', insertResult);

    // to insert many  
    // const insertResult = await collection.insertMany([{ name: "kip", age: 20 }, { name: "somm", age: 12 }]);
    // console.log('Inserted documents =>', insertResult);

    // find the document which match the mathing critiriya 
    const filteredDocs = await collection.find({ age: 20 }).toArray();
    console.log('Found documents filtered by { a: 3 } =>', filteredDocs);

    // ****************** find the data ********************
    // const findResult = await collection.find({}).toArray();
    // console.log('found document =', findResult);
    // let balance = 0;
    // the fingd method is cursor it done not send the network call 
    // it take out the data one by one 
    // the toArray() send the network call but it find tha all data all data at once
    // this can lead to the ram performance overhead  

    // const findResult = collection.find({}).toArray();
    // for await (const obj of findResult) {
    //     console.log(obj);
    //     balance++;
    // }
    // console.log(balance);
    // const ans = await findResult.toArray();
    // console.log('Found documents =>', ans);
    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());


// if the data base is not present then what will happend it will throw the error or make it new one 