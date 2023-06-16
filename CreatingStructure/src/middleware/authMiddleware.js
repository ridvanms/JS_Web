const jwt = require("../lib/jwt");

exports.auth = async (req, res, next) => {
  const token = req.cookies["token"];

  if (token) {
    try {
      await jwt.verify();
    } catch (err) {
      console.log(err.message);
    }
  } else {
    next();
  }
};
