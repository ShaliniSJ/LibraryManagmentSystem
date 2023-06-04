const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "pass123",
  database: "roots",
});

app.use(cors());
app.use(express.json());
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: true })); //

//simple route
app.get("/books", (req, res) => {
  const sqlselct = "SELECT * FROM books";
  db.query(sqlselct, (err, result) => {
    // console.log("result", result);
    res.send(result);
  });
});

app.get("/Signin", (req, res) => {
  const sqlselct = "SELECT * FROM libname";
  db.query(sqlselct, (err, result) => {
    // console.log(result);
    res.send(result);
  });
});
// set port, listen for requests
app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
