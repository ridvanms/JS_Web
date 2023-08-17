const router = require("express").Router();

const homeController = require("./controller/homeController.js");
const userController = require("./controller/userController.js");

router.use("/", homeController);
router.use("/users", userController);
// NOTE write the routes above
router.get("*", (req, res) => {
  res.render("404");
});

module.exports = router;
