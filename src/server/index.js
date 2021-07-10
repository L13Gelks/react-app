const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "mypage",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (name,password) VALUES (?,?)",
    [name, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE name = ? AND password = ?",
    [name, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong User or Password" });
      }
    }
  );
});

/*app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});*/

app.listen(3001, () => {
  console.log("YEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
});
