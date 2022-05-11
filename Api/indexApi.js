const { response } = require('express');
const express = require('express');
const mongodb = require('mongodb');
const getData = require('./mongoconn');
const app = express();


app.use(express.json());//this code is used to get json data from postman or any other source to nodejs

app.get('/', async (req, res) => { //get method is used to read the data
    let data = await getData();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);
})

app.post('/', async (req, res) => { //post method is used to send data from origin to database(mongodb) or nodejs
    console.log(req.body)
    let data = await getData();
    let result = await data.insertOne(req.body);
    res.send(result);
})

// edit text or fields or update content we use (Put)

app.put("/:name", async (req, res) => {
    let data = await getData();
    let result = data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    )
    res.send({result:"update"})
})

//

app.delete("/:id", async (req, res) => {
    console.log(req.params.id);
    let data = await getData();
    const result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    res.send(result);
})

app.listen(7000);