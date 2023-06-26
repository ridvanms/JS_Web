const bcrypt = require("bcrypt ");
const jwt = require("../lib/jwt");
const User = require("../model/User");
const { SECRET } = require("../config/config");

exports.Login = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("Invalid user or password");
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Invalid user or password");
  }
  const token = await generateToken(user);
  return token;
};
exports.Register = async (userData) => {
  const user = await User.findOne({
    username: userData.username,
  });
  if (user) {
    throw new Error("Username already exists");
  }
  const createUser = User.create(userData);
  const token = await generateToken(createUser);
  return token;
};
async function generateToken(user) {
  const payload = {
    _id: user._id,
    username: user.username,
    email: user.email,
  };
  return jwt.sign(payload, SECRET, { expiresIn: "4h" });
}
