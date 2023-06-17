const router = require("express").Router();
const { getErrorMessage } = require("../utils/errorHelpers");

const photoManager = require("../manager/photoManager");

router.get("/addPhoto", (req, res) => {
  res.render("photos/create");
});
router.post("/addPhoto", async (req, res) => {
  const photoData = {
    ...req.body,
    owner: req.user._id,
  };
  try {
    await photoManager.create(photoData);
    res.redirect("/");
  } catch (err) {
    res.render("photos/addPhoto", { error: getErrorMessage(err) });
  }
});
module.exports = router;
