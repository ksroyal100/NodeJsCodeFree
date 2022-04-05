// const { MongoClient } = require('mongodb');
// //    OR
// // const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// const database = 'Pratice1'; //this is database already exist
// const client = new MongoClient(url);

// async function getData() {
//     let result = await client.connect();
//     let db = result.db(database);
//     // let collection = db.collection('submits');//this is collection that already exist.
//     return db.collection('submits');
//     // let response = await collection.find({}).toArray();
//     // console.log(response);

// }
// getData();

// getData().then((res) => {
//     // console.warn(res.find().toArray());
//     res.find().toArray().then((data) => {
//         console.warn(data);
//     })
// })

const getData = require('./mongodbconn');

const main = async () => {
    let data = await getData();
    data = await data.find().toArray();
    console.warn(data);
}

main();