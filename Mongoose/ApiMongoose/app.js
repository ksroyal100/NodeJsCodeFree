const express = require('express');
const config = require('./config');
const products = require('./schema');
const app = express();

app.use(express.json());

app.get("/search/:key", async (req, res) => {
    console.log(req.params.key)
    let data = await products.find(
        {
            "$or": [
                { "name": {$regex:req.params.key}}
            ]
        }
    )
    res.send(data);
})

app.listen(6000);
