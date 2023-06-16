const router = require("express").Router();

const userManager = require("../manager/userManager");

router.get("/login", (req, res) => {
  res.render("users/login");
});
router.post("/login", async (req, res) => {
  const { userName, password } = req.body;

  const token = await userManager.login(userName, password);

  res.cookie("token", token);

  res.redirect("/");
});
router.get("/register", (req, res) => {
  res.render("users/register");
});
router.post("/register", async (req, res) => {
  const { userName, email, password, repeatPassword } = req.body;

  await userManager.register({
    username: userName,
    email,
    password,
    repeatPassword,
  });

  res.redirect("/users/login");
});

module.exports = router;
