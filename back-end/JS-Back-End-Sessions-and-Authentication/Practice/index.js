const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("./lib/jwt.js");

const secret = "123";
const user = {};

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extends: false }));

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to my site</h1>
                <form action="/login" >
                    <input type="submit" value="Login">
                </form>`);
});

app.get("/register", (req, res) => {
  res.send(`
    <h1>Registration</h1>
    <form method="POST">
        <input type="text" name="userName" placeholder="userName">
        <input type="password" name="password" placeholder="password">
        <input type="password" name="rep-password" placeholder="rep-password">
        <input type="submit" value="register">
    </form>`);
});
app.post("/register", async (req, res) => {
  const { userName, password, "rep-password": repPassword } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  if (password != repPassword) {
    console.log("re-password doesn't match with password");
  } else {
    if ((userName === "", password === "")) {
      console.log("you need to fill the fields");
      return;
    }
    user[userName] = {
      password: hash,
    };
    console.log(user);
    res.redirect("/login");
  }
});

app.get("/login", (req, res) => {
  res.send(`<form method="POST"   >
        <input type="text" name="userName" placeholder="user">
        <input type="password" name="password" placeholder="password">
        <input type="submit" name="button" value="Login" >
    </form>
    <form action="/register">
        <input type="submit" value="register">
    </form>`);
});
app.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    res.status(401).send("Unauthorized");
    return;
  }
  const hash = user[userName]?.password;
  const isValid = await bcrypt.compare(password, hash);
  if (isValid) {
    try {
      const payload = { userName };
      const token = await jwt.sign(payload, secret, { expiresIn: "2d" });
      res.cookie("token", token);
      res.redirect("/page");
    } catch (err) {
      res.send(err.message);
    }
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.get("/page", async (req, res) => {
  const token = req.cookies["token"];

  if (token) {
    try {
      const payload = await jwt.verify(token, secret);
      res.send(`page: ${payload.userName}`);
    } catch (err) {
      res.status(401).send("Unauthorized");
    }
  } else {
    res.redirect("/login");
  }
});

const PORT = 3400;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
