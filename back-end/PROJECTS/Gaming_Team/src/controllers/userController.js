const router = require("express").Router();

const userManager = require("../managers/userManager");
const { TOKEN_KEY } = require("../config/config");
router.get("/login", (req, res) => {
  res.render("users/login");
});
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const token = await userManager.Login(username, password);
    res.cookie(TOKEN_KEY, token);
    res.redirect("/");
  } catch (err) {
    // res.render("user/login", { error: getErrorMessage() });
    console.log("error: ", err.message);
  }
});
router.get("/register", (req, res) => {
  res.render("users/register");
});
router.post("/register", (req, res) => {
  //TODO
});

module.exports = router;
