var mysql = require("mysql");

var con = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
    database: "student",
  })
  .connect(function (err) {
    if (err) return err;
    return "Connected";
  });

console.log(con);
module.exports.connection = con;
