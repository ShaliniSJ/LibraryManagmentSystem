const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "Yourusername",
  password: "Yourpassword",
  database: "Your database name",
});

app.use(cors());
app.use(express.json());
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: true }));
//simple route

//to get books
app.get("/books", (req, res) => {
  const sqlselct = "SELECT * FROM books";
  db.query(sqlselct, (err, result) => {
    // console.log("result", result);
    res.send(result);
  });
});

//to post new book
app.post("/books", async (req, res) => {
  const name = req.body.name;
  const author = req.body.author;
  const sql = "select bcode from books";
  db.query(sql, (err, result) => {
    const availabilty = true;
    const holdby = "none";
    const bcode = result.length + 1;
    const sqlInsert =
      "INSERT INTO books (bcode,name,author,availability,holdby) VALUES (?,?,?,?,?)";
    db.query(
      sqlInsert,
      [bcode, name, author, availabilty, holdby],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        // console.log(result);
        res.send("added new book");
      }
    );
  });
});

//to register book to member
//i know this is dumb way to do this but i dont know how to do it in better way .BTW well come to call back hell
app.post("/books/:bcode", async (req, res) => {
  const bcode = req.params.bcode;
  const idno = req.body.idno;
  const sql = "select * from books where bcode = ?";
  db.query(sql, bcode, (err, result) => {
    //checking if book is available if yes then register book to member
    if (result[0].availability == "no") {
      // console.log("it came here")
      res.send("Book not available");
      return;
    }
    const availabilty = "no";
    const sqlname = "select name from libmem where idno = ?";
    db.query(sqlname, idno, (err, result1) => {
      //getting name of member
      const holdby = result1[0].name;
      console.log(result1);
      const sqlInsert =
        "UPDATE books SET availability = ?, holdby = ? WHERE bcode = ?";
      db.query(sqlInsert, [availabilty, holdby, bcode], (err, result) => {
        //updating book table
        if (err) {
          console.log(err);
        }
        // console.log(result);
        res.send("book registered");
      });
    });
  });
});

//to submit book
// sorry :_) callback hell
app.post("/books/submit/:bcode", (req, res) => {
  const bcode = req.params.bcode;
  const idno = req.body.idno;
  const sql = "select * from books where bcode = ?";
  db.query(sql, bcode, (err, result) => {
    if (result[0].availability == "yes") {
      res.send("Invalid Submittion");
      return;
    }
    const availability = "yes";
    const holdby = result[0].holdby;
    const sqlInsert = "select name from libmem where idno = ?";
    db.query(sqlInsert, idno, (err, result1) => {
      const name = result1[0].name;
      if (holdby == name) {
        const sqlupdate = "update books set availability = ?, holdby = 'none' where bcode = ? "
        db.query(sqlupdate,[availability,bcode],(err,result2)=>{
          res.send("Submitted");
        })

      } else
        res.send("Book is submitted by diffrent person. Aborting Submission");
    });
  });
});

//authentication of librarian
app.get("/Signin", (req, res) => {
  const sqlselct = "SELECT * FROM libname WHERE pass = '123456'";
  db.query(sqlselct, (err, result) => {
    // console.log(result);
    res.send(result);
  });
});

//
app.get("/librarian", (req, res) => {
  const sqlselct = "SELECT name FROM libname";
  db.query(sqlselct, (err, result) => {
    res.send(result);
  });
});

//to get members info
app.get("/members", (req, res) => {
  const sqlselct = "SELECT * FROM libmem";
  db.query(sqlselct, (err, result) => {
    res.send(result);
  });
});

//to post new member
//future me seeing this dumb thing i know this is dumb to have function inside a function but it is easy to understant this way
//btw db.query is async function and does not return promise so i cant use await
app.post("/members", async (req, res) => {
  const name = req.body.name;
  const ph = req.body.ph;
  const address = req.body.address;
  const sql = "select idno from libmem";
  db.query(sql, (err, result) => {
    const idno = result.length + 1;
    const sqlInsert =
      "INSERT INTO libmem (idno,name,ph,address) VALUES (?,?,?,?)";
    db.query(sqlInsert, [idno, name, ph, address], (err, result) => {
      if (err) {
        console.log(err);
      }
      // console.log(result);
      res.send("added new member");
    });
  });
});

//to delete member
app.delete("/members/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM libmem WHERE idno = ?";
  db.query(sql, id, (err, result) => {
    if (err) console.log(err);
    res.send("deleted");
  });
});

// set port, listen for requests
app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
