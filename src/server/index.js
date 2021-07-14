const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 1000 * 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "mypage",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query("SELECT * FROM users WHERE name = ?", name, (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send({ message: "User already exists" });
      } else {
        db.query(
          "INSERT INTO users (name,password,img) VALUES (?,?,?)",
          [name, hash, "default"],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send({ message: "Values Inserted" });
            }
          }
        );
      }
    });
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE name = ?", name, (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          req.session.user = result;
          console.log(req.session.user);
          res.send(result);
        } else {
          res.send({ message: "Wrong User or Password" });
        }
      });
    } else {
      res.send({ message: "User does not exist" });
    }
  });
});

app.get("/logout", (req, res) => {
  if (req.session.user) {
    req.session.destroy();
    req.session.regenerate();
  }
});

//change user-info when logged in inside Navbar
app.get("/user-icon", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});
//get all users names for chat
app.get("/getUsers", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      res.send(result);
    }
  });
});
//get All messages from users
app.post("/getMessages", (req, res) => {
  const user = req.body.user;
  const friend = req.body.friend;

  db.query(
    "SELECT * FROM users_messages WHERE user = ? OR user = ?",
    [user + "-" + friend, friend + "-" + user],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "nope" });
      }
    }
  );
});

app.post("/setMessages", (req, res) => {
  const user = req.body.user;
  const friend = req.body.friend;
  const message = req.body.message;

  db.query(
    "INSERT INTO users_messages (user,message) VALUES (?,?)",
    [user + "-" + friend, message],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ message: "Values Inserted" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("YEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
});
