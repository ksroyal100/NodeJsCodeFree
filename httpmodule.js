const http = require('http');

// Creating server by sort function trick.
// there are two ways to define function.

// function dataControl(req, res) {
//     res.write("<h1>hello this is your manager</h1>");
//     res.end();
// };
//   OR 

const dataControl = (req, res) => {
    res.write("<h1>hello this is your manager</h1>");
    res.end();
}
http.createServer(dataControl).listen(5000);