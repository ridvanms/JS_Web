const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const { PORT } = require("./config/config.js");
const path = require("path");
const routes = require("./routes.js");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/GameTeamCopy")
  .then(() => console.log("Db is connected successfully"))
  .catch((err) => console.error(`Error: ${err.message}`));

app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(routes);



app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
