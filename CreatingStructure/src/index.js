const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const { auth } = require("./middleware/authMiddleware");
const routes = require("./routes");
const path = require("path");

const app = express();

// mongoose
// TODO change db name
mongoose
  .connect("mongodb://127.0.0.1:27017/petstagram")
  .then(() => console.log("DB is connected successfully"))
  .catch((err) => console.log(err.message));

//   express
app.engine(`hbs`, handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

// default settings
app.use("/static", express.static(path.resolve(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);
app.use(routes);

const PORT = 3000;
app.listen(PORT, console.log(`Server is listening on ${PORT}`));
