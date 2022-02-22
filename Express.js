const express = require('express');
const app = express();

app.get('', (req, res) => {
    // console.log("data sent by browser =>>>", req.query.name);
    res.send("<h1>hello kishan boss</h1>");
});

app.get('/about', (req, res) => {
    res.send(`
    <input type="text" placeholder="Enter your name" value="${req.query.name}" /> `);
});

app.get('/json', (req, res) => {
    res.send({
        name: "kishan",
        email: "guptakishan492@gmail.com",
        address: "abeergarh tola jaunpur",
        favourate: "ks"
    });
});

app.listen(4000);
console.log("Running successfully");
