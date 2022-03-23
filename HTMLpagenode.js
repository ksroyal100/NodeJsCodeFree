const express = require('express');
const path = require('path');

const app = express();
const public_path = path.join(__dirname, 'HTMLpagenode');

app.set('view engine', 'ejs');

// app.use(express.static(public_path));

app.get("", (req, res) => {
    res.sendFile(`${public_path}/index.html`);
})

//this access views folder content
app.get("/profile", (req, res) => {
    const user = {
        name: "kishan sahu",
        email: "guptakishan492@gmail.com",
        goal: "software engineer",
        skills:[
            'python','javascript','java','c++','dart','swift','php','c','c#','kotlin'
        ]
    }
    res.render('profile', {user});
})
app.get("/about", (req, res) => {
    res.sendFile(`${public_path}/about.html`);
})

app.get("/login", (req, res) => {
    res.render('login');
})

app.get("*", (req, res) => {
    res.sendFile(`${public_path}/pagenotfound.html`);
})

app.listen(7000);
console.log(`Server running at ${7000}`);