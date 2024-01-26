require("dotenv").config();
const express = require("express"); //commonjs
const path = require("path"); //commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express(); // app express
const port = process.env.PORT || 8888; // port hardcode .uat .prod
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// config template engine
configViewEngine(app);

//config static files

//khai bao route
app.use("/", webRoutes);

// connection.query("select * from Users u ", function (err, results, fields) {
//   console.log(">>>result= ", results); // results contains rows returned by server
// });

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
