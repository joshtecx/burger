const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DATABASE_PASSWORD || "root",
    database: "burgers_db"
});

connection.connect((err) => {
    if(err) throw err;
    console.log("Connected as ID: " + connection.threadId);
});

module.exports = connection;