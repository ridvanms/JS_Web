const User = require("../model/User.js");

const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt.js");
const { SECRET } = require("../config/config.js");

exports.login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid user or password");
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Invalid user or password");
  }
  const token = generateToken(user);
  return token;
};

exports.register = async (userData) => {
  const user = await User.findOne({ username: userData.username });

  if (user) {
    throw new Error("Username already exists");
  }

  const { username, email, password, confirmPassword } = userData;
  if (!username || !email || !password || !confirmPassword) {
    throw new Error("All fields need to be fulfilled");
  }

  const createUser = User.create(userData);

  const token = generateToken(createUser);
  return token;
};

async function generateToken(user) {
  const payload = {
    _id: user._id,
    username: user.username,
    email: user.email,
  };
  return jwt.sign(payload, SECRET, { expiresIn: "5h" });
}
