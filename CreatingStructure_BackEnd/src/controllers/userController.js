const router = require("express").Router();

const { getErrorMessage } = require("../utils/errorHelpers");
const { TOKEN_KEY } = require("../config/config");
const userManager = require("../manager/userManager");

router.get("/login", (req, res) => {
  res.render("users/login");
});
router.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  try {
    const token = await userManager.login(userName, password);
    res.cookie(TOKEN_KEY, token);
    res.redirect("/");
  } catch (err) {
    res.render("users/login", { error: getErrorMessage(err) });
  }
});
router.get("/register", (req, res) => {
  res.render("users/register");
});
router.post("/register", async (req, res) => {
  const { userName, email, password, repeatPassword } = req.body;

  try {
    const token = await userManager.register({
      username: userName,
      email,
      password,
      repeatPassword,
    });
    res.cookie(TOKEN_KEY, token);
    res.redirect("/");
  } catch (err) {
    res.render("users/register", {
      error: getErrorMessage(err),
      username: userName,
      email,
    });
  }
});
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

module.exports = router;
