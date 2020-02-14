const mysql = require("mysql")
const {
    DATABASE_NAME,
    DATABASE_HOST,
    DATABASE_USER,
    DATABASE_PASSWORD,
} = require("./environment")

const connection = mysql.createConnection({
   database: DATABASE_NAME,
   host:  DATABASE_HOST,
   user:  DATABASE_USER,
   password:  DATABASE_PASSWORD,
})

module.exports = connection


// const mysql = require("mysql");
// const connection = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "amir!@#",
//   database: "myweb"
// });

// module.exports = connection;
