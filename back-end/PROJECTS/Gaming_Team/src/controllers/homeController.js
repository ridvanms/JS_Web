const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/search", (req, res) => {
  res.render("search");
});
router.get("/catalog", (req, res) => {
  res.render("catalog");
});
module.exports = router;
