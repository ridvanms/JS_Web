const express = require("express");
const handlebars = require("express-handlebars");

const routes = require("./routes");

const app = express();

app.engine(`hbs`, handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

const PORT = 3000;
app.listen(PORT, console.log(`Server is listening on ${PORT}`));
