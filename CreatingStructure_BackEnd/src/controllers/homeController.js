const router = require("express").Router();

const photoManager = require("../manager/photoManager");

const { isAuth } = require("../middleware/authMiddleware");

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/404", (req, res) => {
  res.render("404");
});
router.get("/Profile", isAuth, async (req, res) => {
  const photos = await photoManager.getByOwner(req.user._id).lean();
  res.render("profile", { photos, photoCount: photos.length });
});
module.exports = router;
