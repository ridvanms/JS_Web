const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email is already exist"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [5, "The password is too short"],
  },
});

userSchema.virtual("confirmPassword").set(function (value) {
  if (this.password !== value) {
    throw new Error("password mismatch");
  }
});

userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
});

const User = mongoose.model("User", userSchema);
module.exports = User;
