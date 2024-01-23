require("dotenv").config();
const express = require("express"); //commonjs
const path = require("path"); //commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require('mysql2');

const app = express(); // app express
const port = process.env.PORT || 8888; // port hardcode .uat .prod
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

//config static files

//khai bao route
app.use("/", webRoutes);

//test connection mysql
// Creat the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307, //default: 3306
  user: 'root', //default : empty
  password: '123456',
  database: 'hoidanit'
});

connection.query(
  'select * from Users u ',
  function (err, results, fields) {
    console.log(">>>result= ", results);// results contains rows returned by server
    console.log(">>>fields= ", fields);// fields contains extra meta data about result
  }
)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
