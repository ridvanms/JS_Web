const router = require("express").Router();

const gameManager = require("../managers/gameManager");

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/search", (req, res) => {
  res.render("search");
});
router.get("/catalog", async (req, res) => {
  const games = await gameManager.getAllGames();
  console.log(games);
  res.render("catalog", { games });
});
module.exports = router;
