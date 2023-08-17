const router = require("express").Router();
const userManager = require("../manager/userManager.js");
const { TOKEN_KEY } = require("../config/config.js");

router.get("/login", (req, res) => {
  res.render("users/login");
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await userManager.login(email, password);
    res.cookie(TOKEN_KEY, token);
    res.redirect("/");
  } catch (err) {
    res.render("users/login", { error: err.message });
  }
});
router.get("/register", (req, res) => {
  res.render("users/register");
});
router.post("/register", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  try {
    const token = await userManager.register({
      username,
      email,
      password,
      confirmPassword,
    });
    res.cookie(TOKEN_KEY, token);
    res.redirect("/");
  } catch (err) {
    res.render("users/register", { error: err.message });
  }
});

module.exports = router;
