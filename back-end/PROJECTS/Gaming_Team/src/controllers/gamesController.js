const { auth, isAuth } = require("../middleware/authMiddleware");
const router = require("express").Router();

const { createGame } = require("../managers/gameManager");

router.get("/create", isAuth, (req, res) => {
  res.render("games/create");
});
router.post("/create", isAuth, async (req, res) => {
  const gameData = req.body;
  try {
    await createGame(gameData);

    res.redirect("/catalog");
  } catch (err) {
    res.render("games/create", { error: err.message, gameData });
  }
});
module.exports = router;
