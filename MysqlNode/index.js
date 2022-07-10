const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs'
});
con.connect((err) => {
    if (err) {
        console.warn("error");
    } else {
        console.warn("connection successfully");
    }
});

con.query("select * from users", (err, result) => {
    console.log("result",result)
})