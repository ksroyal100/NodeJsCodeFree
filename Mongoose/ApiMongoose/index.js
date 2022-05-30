const express = require('express');
const config = require('./config');
const products = require('./schema');
const app = express();

app.use(express.json());
app.post("/", async (req, res) => {
    let data = new products(req.body);
    let result = await data.save();
    console.log(result);
    res.send("Done Api");
})

app.listen(5000);
