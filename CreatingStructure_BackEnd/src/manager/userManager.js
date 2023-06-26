const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");

const { SECRET } = require("../config/config");

exports.login = async (username, password) => {
  // TODO find user by username
  const user = await User.findOne({ username });

  if (!user) {
    throw new Error("Invalid user or password");
  }
  // TODO check password
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Invalid user or password");
  }

  const token = await generateToken(user);
  return token;
};

exports.register = async (userData) => {
  const user = await User.findOne({ username: userData.username });

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
  return jwt.sign(payload, SECRET, { expiresIn: "2d" });
}
