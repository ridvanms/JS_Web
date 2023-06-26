const router = require("express").Router();

const homeController = require("./controllers/homeController");
const userController = require("./controllers/userController");
const gamesController = require("./controllers/gamesController");

router.use("/", homeController);
router.use("/users", userController);
router.use("/games", gamesController);
router.get("*", (req, res) => {
  res.render("404");
});

module.exports = router;
