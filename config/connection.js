const mysql = require("mysql");

let connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: process.env.DATABASE_PASSWORD || "root",
        database: "burgers_db"
    });
}



connection.connect((err) => {
    if(err) throw err;
    console.log("Connected as ID: " + connection.threadId);
});

module.exports = connection;