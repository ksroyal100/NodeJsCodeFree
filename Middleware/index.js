const express = require('express');
const app = express();
const reqFilter = require('./middleware');
const route = express.Router();

// const reqFilter = (req, res, next) => {
//     // console.log('reqFilter');

//     if (!req.query.age) {
//         res.send("<h1>please provide age</h1>");
//     }
//     else if (req.query.age < 18) {
//         res.send("<h1>You Cannot Access</h1>");
//     }
//     else {
//         next();
//     }
//     // next();
// }

// app.use(reqFilter); using this we can apply to all without mentioning reqfilter to every route.

route.use(reqFilter);

app.get('/', (req, res) => { 
    res.send('<h1>Welcome to Home page</h1>');
})

app.get('/users', (req, res) => {
    res.send('<h1>Welcome to users page</h1>');
})

// using route instead app provide the facility to use middleware 
route.get('/about', (req, res) => {
    res.send('<h1>Welcome to about page</h1>')
})

app.listen(7500);
console.log("Running Successful");

app.use('/', route);