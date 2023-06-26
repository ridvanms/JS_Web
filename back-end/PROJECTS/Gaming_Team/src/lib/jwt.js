const jsonwebtoken = require("jsonwebtoken");
const util = require("util");

const jwt = {
  sign: util.promisify(jsonwebtoken),
  verify: util.promisify(jsonwebtoken.verify),
};

module.exports = jwt;
