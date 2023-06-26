const express = require("express");
const { PORT } = require("./config/config.js");

const app = express();



app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
