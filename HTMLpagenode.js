const express = require('express');
const path = require('path');

const app = express();
const public_path = path.join(__dirname, 'HTMLpagenode');

app.set('view engine', 'ejs');

// app.use(express.static(public_path));

app.get("", (req, res) => {
    res.sendFile(`${public_path}/index.html`);
})

//this accesss views folder content
app.get("/profile", (req, res) => {
    res.render('profile');
})

app.get("/about", (req, res) => {
    res.sendFile(`${public_path}/about.html`);
})
app.get("*", (req, res) => {
    res.sendFile(`${public_path}/pagenotfound.html`);
})

app.listen(7000);
console.log(`Server running at ${7000}`);