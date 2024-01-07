const mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  name: process.env.DB_NAME,
});

connection.connect((err) => {
  if (!err) {
    console.log("Your database is connected!");
  } else {
    console.log(err);
  }
});

module.exports = connection;
