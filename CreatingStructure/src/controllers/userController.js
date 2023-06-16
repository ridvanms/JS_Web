const router = require("express").Router();

const userManager = require("../manager/userManager");

router.get("/login", (req, res) => {
  res.render("users/login");
});
router.post("/login", async (req, res) => {
  const { userName, password } = req.body;

  await userManager.login(userName, password);
  res.send("Logged in");
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

  res.send("Registered");
});

module.exports = router;
