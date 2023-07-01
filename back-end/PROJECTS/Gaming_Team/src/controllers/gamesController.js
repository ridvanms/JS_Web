const router = require("express").Router();

router.get("/create", (req, res) => {
  res.render("games/create");
});
router.post("/create", (req, res) => {
  const createData = req.body;
  console.log(createData);
  // res.redirect("/catalog");
});
module.exports = router;
