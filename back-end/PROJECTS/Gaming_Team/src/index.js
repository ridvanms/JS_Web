const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const { PORT } = require("./config/config.js");
const routes = require("./routes.js");
const path = require("path");
const { auth } = require("./middleware/authMiddleware.js");

const app = express();
mongoose
  .connect("mongodb://127.0.0.1:27017/GameTeam")
  .then(() => console.log("DB is connected successfully"))
  .catch((err) => console.log(err.message));

app.engine(`hbs`, handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
